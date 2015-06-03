describe('factory: Cache', function() {
  var cache;
  beforeEach(module('GitUserSearch'));
  beforeEach(inject(function(searchCache) {
    cache = searchCache;
  }));


  it('allows setting a key', function () {
    expect(cache.put('horse', 'joey')).toEqual('joey');
  });
  it('allows getting a key', function () {
    cache.put('horse', 'joey')
    expect(cache.get('horse')).toEqual('joey');
  });
});
