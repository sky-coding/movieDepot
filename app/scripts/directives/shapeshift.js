'use strict';

angular.module('moviedepotApp')
  .directive('shapeshift', function (debounce) {
    return {
      scope: {
        data: '='
      },
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var $ = window.jQuery;

        var baseShapeshiftOptions = {
          enableDrag: false,
          enableCrossDrop: false,
          enableResize: true
        };

        // on mobile, only show a single column at all times. debounce prevents excessive resizing.
        var debouncedResize = debounce(function () {
          var width = $(window).width();

          if (width < 768) {
            $('.ss-container').shapeshift($.extend({}, baseShapeshiftOptions, {columns: 1}));
          } else {
            $('.ss-container').shapeshift(baseShapeshiftOptions);
          }

          // force shapeshift to recalculate positions after column changes
          element.trigger('ss-rearrange');

        }, 250);

        // attach debounced resize function to window resize event
        $(window).resize(debouncedResize);

        scope.$watch('data', function (data) {
          if (!data || !data.length) {
            return;
          }

          // force shapeshift to rebuild after element changes
          element.shapeshift(baseShapeshiftOptions);
        });

      }
    };
  });
