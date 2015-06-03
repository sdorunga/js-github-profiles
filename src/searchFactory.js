githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: "Get",
        params: {
          'q': searchTerm,
          'access_token': '7bd574ea7118f0870cc23b89e7e1a748b18ba58a'
        }
      });
    }
  }
}]);
