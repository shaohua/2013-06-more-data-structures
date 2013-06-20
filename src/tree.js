var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;

  newTree = _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(){
};

treeMethods.contains = function(){
};
