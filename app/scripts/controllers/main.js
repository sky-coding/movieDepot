'use strict';

angular.module('moviedepotApp')
  .controller('MainCtrl', function ($scope, movieSearchService) {

    var ctrl = this;

    ctrl.results = [];
    ctrl.searchTerm = null;
    ctrl.totalResultsCount = null;
    ctrl.currentPage = null;
    ctrl.pageChanged = pageChanged;

    // pull new results from API when search term changes
    $scope.$watch('ctrl.searchTerm', function (searchTerm) {
      if (!searchTerm) {
        ctrl.results = [];
        return;
      }

      searchByTerm(searchTerm);
    });

    function searchByTerm(term, page) {
      movieSearchService.searchByTerm(encodeURIComponent(term), page).then(function (data) {
        ctrl.results = data.results;
        ctrl.currentPage = data.page;
        ctrl.totalResultsCount = data.total_results;
      });
    }

    function pageChanged() {
      searchByTerm(ctrl.searchTerm, ctrl.currentPage);
    }

  });
