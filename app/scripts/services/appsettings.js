'use strict';

angular.module('moviedepotApp')
  .factory('appSettings', function () {
    return {
      movieSearchApiUrl: 'https://api.themoviedb.org/3/search/movie',
      movieSearchApiKey: ''
    }
  });
