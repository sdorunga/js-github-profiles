githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    self.searchResult = Search.query(self.searchTerm);
  };
}]);
