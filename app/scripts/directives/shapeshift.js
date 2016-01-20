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

        function onResize () {
          if (!scope.data || !scope.data.length) {
            return;
          }

          var width = $(window).width();

          if (width < 768) {
            // on mobile, only show a single column at all times.
            $('.ss-container').shapeshift($.extend({}, baseShapeshiftOptions, {columns: 1}));
          } else {
            $('.ss-container').shapeshift(baseShapeshiftOptions);
          }

          setTimeout(function () {
            element.trigger('ss-rearrange');
          });

        }

        // attach debounced onResize function to window resize event
        $(window).resize(debounce(onResize, 250));

        // resize on data change
        scope.$watch('data', onResize);
      }
    };
  });
