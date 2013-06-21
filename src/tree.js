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

treeMethods.contains = function(input){ //input should be 'value', not a tree
  var found = false;
  var walker = function(input_tree){
    if(input_tree.value === input){
      found = true;
      return true;
    }

    if(input_tree.children !== undefined){
      _.each(input_tree.children, function(value, index, collection){
        walker(value);
      });
    }
  };

  walker(this);

  return found;

};
