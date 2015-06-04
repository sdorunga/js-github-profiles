describe('GitUserSearchController', function() {

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

  beforeEach(module('GitUserSearch'));
  beforeEach(module(function($provide) {
    $provide.service("Search", function() {
      this.query = jasmine.createSpy('Search').and.callFake(function(){return items});//{then: function(){ return items}}})
    });
  }));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  var mockSearch;
  beforeEach(inject(function(Search, $q) {
    mockSearch = Search
  }))

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {
    it('displays search results', function() {
      ctrl.searchTerm = "Hola";
      ctrl.doSearch();
      expect(ctrl.searchResult).toEqual(items);
    });

    it('does not request information from github with an empty search term', function() {
      ctrl.doSearch();
    });

    describe('when search has already been performed', function() {
      it('does not request new data from github', function() {
        ctrl.searchTerm = "Hola";
        ctrl.doSearch();
        ctrl.doSearch();
      });

      it('returns the same results as before', function() {
        ctrl.searchTerm = "Hola";
        ctrl.doSearch();
        ctrl.doSearch();
        expect(ctrl.searchResult).toEqual(items);
      });

      it('returns the same results as before if another search is performed in between', function() {
        ctrl.searchTerm = "Hola";
        ctrl.doSearch();
        ctrl.searchTerm = "Ebola";
        ctrl.doSearch();
        ctrl.searchTerm = "Hola";
        ctrl.doSearch();
        expect(ctrl.searchResult).toEqual(items);
      });
    });
  });
})
