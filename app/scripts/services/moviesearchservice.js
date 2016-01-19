'use strict';

angular.module('moviedepotApp')
  .factory('movieSearchService', function ($http) {

    var movieSearchApiUrl = 'https://api.themoviedb.org/3/search/movie';
    var movieSearchApiKey = '{#ApiKey}';

    function searchByTerm(term /*, page */) {

      return $http.get(movieSearchApiUrl, {
        params: {
          'api_key': movieSearchApiKey,
          'query': term
        }
      }).then(function (response) {
        return response.data;
      });

    }

    return {
      searchByTerm: searchByTerm
    };

  });
