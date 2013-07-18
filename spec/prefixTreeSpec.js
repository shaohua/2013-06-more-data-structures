describe("prefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it("should have methods named 'insert', 'remove' and 'contains'", function() {
    expect(prefixTree.insert).toEqual(jasmine.any(Function));
    expect(prefixTree.remove).toEqual(jasmine.any(Function));
    expect(prefixTree.contains).toEqual(jasmine.any(Function));
  });

  it("should insert one value to the tree", function() {
    prefixTree.insert('abc');
    expect(prefixTree.contains('abc')).toEqual(true);
  });

  it("should insert more than one values", function() {
    prefixTree.insert('nike');
    prefixTree.insert('abc');
    prefixTree.insert('nice');
    prefixTree.insert('name');
    expect(prefixTree.contains('nike')).toEqual(true);
    expect(prefixTree.contains('abc')).toEqual(true);
    expect(prefixTree.contains('nice')).toEqual(true);
    expect(prefixTree.contains('name')).toEqual(true);
    expect(prefixTree.contains('nick')).toEqual(false);
    expect(prefixTree.contains('nikee')).toEqual(false);
  });

  it("should remove values", function() {
    prefixTree.insert('shaohua');
    prefixTree.insert('shout');
    prefixTree.remove('shout');
    //debugger;
    prefixTree.remove('shao');
    expect(prefixTree.contains('shaohua')).toEqual(true);
    expect(prefixTree.contains('shout')).toEqual(false);
  });

  it("should remove edge cases", function() {
    prefixTree.insert('u');
    prefixTree.insert('it');
    prefixTree.insert('hi');
    prefixTree.insert('hit');
    prefixTree.remove('u');
    prefixTree.remove('it');
    prefixTree.remove('hit');
    expect(prefixTree.contains('u')).toEqual(false);
    expect(prefixTree.contains('it')).toEqual(false);
    expect(prefixTree.contains('hit')).toEqual(false);
    expect(prefixTree.contains('hi')).toEqual(true);
  });

});