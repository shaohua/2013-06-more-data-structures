describe("prefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  xit("should have methods named 'insert', 'remove' and 'contains'", function() {
    expect(prefixTree.insert).toEqual(jasmine.any(Function));
    expect(prefixTree.remove).toEqual(jasmine.any(Function));
    expect(prefixTree.contains).toEqual(jasmine.any(Function));
  });

  xit("should insert one value to the tree", function() {
    prefixTree.insert('abc');
    expect(prefixTree.contains('abc')).toEqual(true);
  });

  xit("should insert more than one values", function() {
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
    prefixTree.remove('shao');
    expect(prefixTree.contains('shaohua')).toEqual(true);
    expect(prefixTree.contains('shout')).toEqual(false);
  });

});