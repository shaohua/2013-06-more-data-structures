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

  it("should insert one value to the search tree", function() {
    prefixTree.insert('abc');
    prefixTree.insert('acd');
    prefixTree.insert('abcde');
    expect(prefixTree.value).toEqual(5);
    console.log('trie', prefixTree);
  });

  xit("should insert more than one values to the search tree, LEFT", function() {
    prefixTree.insert('nike');
    prefixTree.insert('abc');
    prefixTree.insert('nice');
    prefixTree.insert('name');
    expect(prefixTree.left.value).toEqual(10);
  });

});