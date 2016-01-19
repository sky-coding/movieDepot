'use strict';

angular.module('moviedepotApp')
  .controller('MainCtrl', function ($scope, movieSearchService) {

    var ctrl = this;

    ctrl.searchTerm = null;
    ctrl.results = [];

    $scope.$watch('ctrl.searchTerm', function (searchTerm) {

      if (!searchTerm) {
        ctrl.results = [];
        return;
      }

      movieSearchService.searchByTerm(encodeURIComponent(searchTerm)).then(function (data) {
        ctrl.results = data.results;
      });
    });

  });
