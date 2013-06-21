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
  // debugger;
  var that = this;
  var found = false;
  var count = 0;
  var walker = function(input_tree){
    count++;
    console.log(count, input_tree, input_tree['value'], input, found);

    if(input_tree['value'] === input){
      found = true;
      return true;
    }

    console.log(count, input_tree, input_tree['value'], input, found);

    if(input_tree.children !== undefined){
      _.each(input_tree.children, function(item, key, collection){
        walker(item);
      });
    }
    // debugger;
  };

  walker(that);//passing a tree, not a value

  // debugger;
  return found;

};
