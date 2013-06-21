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

  it("should NOT find non-existing items", function() {
    set.add('bar1');
    set.add('bar2');
    set.add('bar2');
    expect(set.size()).toEqual(2);
  });

  it("should remove one item", function() {
    set.add('bar1');
    set.add('bar2');
    set.remove('bar1');
    expect(set.contains('bar1')).toEqual(false);
  });

  it("should add and remove multiple items", function() {
    set.add('bar1');
    set.add('bar2');
    set.remove('bar1');
    set.add('bar3');
    set.remove('bar3');
    expect(set.contains('bar1')).toEqual(false);
    expect(set.contains('bar2')).toEqual(true);
    expect(set.contains('bar3')).toEqual(false);
  });

  it("should not remove from an empty set", function() {
    set.add('bar1');
    set.remove('bar1');
    set.remove('bar1');
    expect(set.contains('bar1')).toEqual(false);
    expect(set.size()).toEqual(0);
  });

});