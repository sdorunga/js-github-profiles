githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: "Get",
        params: {
          'q': searchTerm,
          'access_token': 'f472860a1867db5184611f9bb6251df1014c09f3'
        }
      });
    }
  }
}]);
