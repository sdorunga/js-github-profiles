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
      .when("GET", "https://api.github.com/search/users?access_token=f472860a1867db5184611f9bb6251df1014c09f3&q=Hola")
      .respond(items);
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('responds to query', function () {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('Hola')
      .then(function(response) {
        expect(response.data).toEqual(items)
      });
    httpBackend.flush();
  });

  it('requests user information from github', function() {
    httpBackend
      .expect("GET", "https://api.github.com/search/users?access_token=f472860a1867db5184611f9bb6251df1014c09f3&q=Hola")

    search.query('Hola')
      .then(function(response) {
        expect(response.data).toEqual(items)
      });
    httpBackend.flush();
  });
});
