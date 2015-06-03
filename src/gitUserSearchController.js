githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;

  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm,
        access_token: '7bd574ea7118f0870cc23b89e7e1a748b18ba58a'
      }
    );
  };
}]);
