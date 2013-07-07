describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree();
  });

  xit("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  xit("should insert one value to the search tree", function() {
    binarySearchTree.insert(5);
    expect(binarySearchTree.value).toEqual(5);
  });

  it("should insert more than one values to the search tree, RIGHT", function() {
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(10);
    expect(binarySearchTree.value).toEqual(5);
    expect(binarySearchTree.right.value).toEqual(7);

  });

  it("should insert more than one values to the search tree, LEFT", function() {
    binarySearchTree.insert(15);
    binarySearchTree.insert(10);
    binarySearchTree.insert(9);
    binarySearchTree.insert(8);
    expect(binarySearchTree.value).toEqual(15);
    expect(binarySearchTree.right).toEqual(undefined);
    expect(binarySearchTree.left.value).toEqual(10);

  });

  it("should insert more than one values to the search tree, BOTH", function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(9);
    binarySearchTree.insert(8);
    expect(binarySearchTree.value).toEqual(10);
    expect(binarySearchTree.right.value).toEqual(15);
    expect(binarySearchTree.left.value).toEqual(9);
    expect(binarySearchTree.left.left.value).toEqual(8);
  });

  it("should find existing values", function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(9);
    binarySearchTree.insert(8);
    expect(binarySearchTree.contains(10)).toEqual(true);
    expect(binarySearchTree.contains(15)).toEqual(true);
    expect(binarySearchTree.contains(9)).toEqual(true);
    expect(binarySearchTree.contains(8)).toEqual(true);
  });

  it("should NOT find non-existing values", function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(9);
    binarySearchTree.insert(8);
    expect(binarySearchTree.contains(7)).toEqual(false);
    expect(binarySearchTree.contains(11)).toEqual(false);
    expect(binarySearchTree.contains(12)).toEqual(false);
    expect(binarySearchTree.contains(13)).toEqual(false);
  });


  it("should walk depth first", function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.insert(12);
    binarySearchTree.insert(11);
    binarySearchTree.insert(13);
    expect(binarySearchTree.depthFirstLog()).toEqual([10,8,7,10,8,9,10,12,11,10,12,13]);
  });
  // add more tests here to test the functionality of binarySearchTree
});