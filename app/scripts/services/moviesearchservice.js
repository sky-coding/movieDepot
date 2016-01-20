'use strict';

angular.module('moviedepotApp')
  .factory('movieSearchService', function ($http, appSettings) {

    function searchByTerm(term, page) {

      return $http.get(appSettings.movieSearchApiUrl, {
        params: {
          'api_key': appSettings.movieSearchApiKey,
          'query': term,
          'page': page
        }
      }).then(function (response) {
        return response.data;
      });

    }

    return {
      searchByTerm: searchByTerm
    };

  });
