describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));


  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {
    var httpBackend;

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "https://api.github.com/search/users?access_token=f472860a1867db5184611f9bb6251df1014c09f3&q=Hola")
        .respond(
          items
        );
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

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

    it('displays search results', function() {
      ctrl.searchTerm = "Hola";
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult).toEqual(items);
    });

    it('requests user information from github', function() {
      httpBackend
        .expect("GET", "https://api.github.com/search/users?access_token=f472860a1867db5184611f9bb6251df1014c09f3&q=Hola")

      ctrl.searchTerm = "Hola";
      ctrl.doSearch();
      httpBackend.flush();
    });
  });
})
