githubUserSearch.factory('searchCache', ['$cacheFactory', function($cacheFactory) {
  return $cacheFactory('search-cache');
}]);
