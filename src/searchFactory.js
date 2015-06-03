githubUserSearch.factory('Search', ['$resource', function($resource) {
  var queryUrl = 'https://api.github.com/search/users';
  var searchResource = $resource(queryUrl);

  return {
    query: function(searchTerm) {
      return searchResource.get(
        { 
          q: searchTerm,
          'access_token': '7bd574ea7118f0870cc23b89e7e1a748b18ba58a'
        })
      }
  }
}]);
