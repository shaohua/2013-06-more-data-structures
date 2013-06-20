var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;

  newTree = _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = this.children || [];
  var subtree = makeTree(value);
  this.children.push(subtree);
};

treeMethods.contains = function(){
};
