describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should add one child", function() {
    tree.addChild('bar1');
    expect(tree.children[0].value).toEqual('bar1');
  });

  it("should add multiple children at the same level", function() {
    tree.addChild('bar1');
    tree.addChild('bar2');
    tree.addChild('bar3');
    tree.addChild('bar4');
    expect(tree.children[0].value).toEqual('bar1');
    expect(tree.children[1].value).toEqual('bar2');
    expect(tree.children[2].value).toEqual('bar3');
    expect(tree.children[3].value).toEqual('bar4');
  });

  it("should find trees with certain values", function() {
    tree.addChild('bar1');
    tree.addChild('bar2');
    tree.addChild('bar3');
    tree.addChild('bar4');
    expect(tree.contains('bar1')).toEqual(true);
  });

  it("should handle complex trees", function() {
    tree.addChild('bar1');
    tree.children[0].addChild('grandchild0');
    tree.children[0].children[0].addChild('greatGrandchild0');
    tree.addChild('bar2');
    tree.children[1].addChild('grandchild1');
    tree.children[1].addChild('grandchild2');
    tree.addChild('bar3');
    tree.children[2].addChild('grandchild3');
    tree.children[2].children[0].addChild('greatGrandchild1');
    tree.addChild('bar4');
    expect(tree.contains('greatGrandchild1')).toEqual(true);
    expect(tree.contains('greatGrandchild0')).toEqual(true);

  });

  it("This test is designed to fail!", function() {
    expect(1).toEqual(2);
  });

  // Add more tests here to test the functionality of tree.
});