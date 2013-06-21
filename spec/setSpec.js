describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should add one item", function() {
    set.add('bar1');
    expect(set.contains('bar1')).toEqual(true);
  });

  it("should add multiple items", function() {
    set.add('bar1');
    set.add('bar2');
    set.add('bar3');
    set.add('bar4');
    expect(set.contains('bar1')).toEqual(true);
    expect(set.contains('bar2')).toEqual(true);
    expect(set.contains('bar3')).toEqual(true);
    expect(set.contains('bar4')).toEqual(true);
  });

  it("should NOT find non-existing items", function() {
    set.add('bar1');
    set.add('bar2');
    set.add('bar3');
    set.add('bar4');
    expect(set.contains('bar5')).toEqual(false);
  });

});