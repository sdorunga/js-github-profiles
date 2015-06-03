describe('factory: Search', function() {
  var search;
  beforeEach(module('GitUserSearch'));
  beforeEach(inject(function(Search) {
    search = Search;
  }));

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];

  var httpBackend;

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://api.github.com/search/users?access_token=7bd574ea7118f0870cc23b89e7e1a748b18ba58a&q=Hola")
      .respond({items: items});
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('responds to query', function () {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    expect(search.query('Hola')).toEqual(items);
    httpBackend.flush();
  });
});
