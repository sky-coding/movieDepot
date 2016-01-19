'use strict';

describe('Service: movieSearchService', function () {

  // load the service's module
  beforeEach(module('moviedepotApp'));

  // instantiate service
  var movieSearchService;
  beforeEach(inject(function (_movieSearchService_) {
    movieSearchService = _movieSearchService_;
  }));

  it('should do something', function () {
    expect(!!movieSearchService).toBe(true);
  });

});
