githubUserSearch.controller('GitUserSearchController', ['Search', 'searchCache', function(Search, searchCache) {
  var self = this;

  self.searchCache = searchCache;
  self.doSearch = function() {
    if(self.searchTerm) {
      if(self.searchCache.get(self.searchTerm)) {
        self.searchResult = self.searchCache.get(self.searchTerm);
      } else {
        Search.query(self.searchTerm)
          .then(function(response) {
          self.searchResult = response.data;
          self.searchCache.put(self.searchTerm, response.data);
        });
      };
    };
  }
}]);
