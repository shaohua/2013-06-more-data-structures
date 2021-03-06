var BinarySearchTree = function(value){
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype._walker = function(node, input){

  if(node.value === undefined || node.value === null) {
    return {found: node, pos: "first"};
  } else {
    if(node.value === input){
      console.log("This value is already in the tree!");
      return {found: node, pos: 'contained'};
    } else {

      if(node.value < input){

        if(node.right === null || node.right === undefined){
          console.log('node is to the right');
          return {found: node, pos: "right"};
          // node.right = new BinarySearchTree(input); // return node and 'right'
        } else {
          return this._walker(node.right, input);
        }

      } else if(node.value > input) {

          if(node.left === null || node.left === undefined){
            console.log('node is to the left');
            return {found: node, pos: "left"};
            // node.left = new BinarySearchTree(input); // return node and 'left'
          } else {
            return this._walker(node.left, input);
          }

      } else {

        console.log("This is a weird case, fix me!");

      }

    }
  }
};

BinarySearchTree.prototype.insert = function(input){
  console.log("inserting---", input);
// Step 1: Go to node and ask, "Am I bigger or smaller than you?"
//         * If smaller, go to left node
//           * If left node is undefined, become the left node
//           * If left node is present, go back to Step 1
//         * If bigger, go to right node
//           * If right node is undefined, become the right node
//           * If right node is present, go back to Step 1

  var result = this._walker(this, input);
  if (result.pos === "first") {
    result.found.value = input;
  } else if (result.pos === "left") {
    result.found.left = new BinarySearchTree(input);
  } else if (result.pos === "right") {
    result.found.right = new BinarySearchTree(input);
  } else {
    console.log("This should never happen!");
  }

};

BinarySearchTree.prototype.contains = function (query) {
  var result = this._walker(this, query);
  if (result.pos === 'contained'){
    return true;
  } else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback){

  var output = [];

  var walker = function(prefix, node){
    var prefix_copy = prefix.slice();
    prefix_copy.push(node.value);

    if(node.left !== null && node.left !== undefined){
      walker(prefix_copy, node.left);
    }
    if(node.right !== null && node.right !== undefined){
      walker(prefix_copy, node.right);
    }
    if( (node.left === null || node.left === undefined) && 
        (node.right === null || node.right === undefined) ){
        output = output.concat(prefix_copy);
    }

  };

  walker([], this);

  return output;

};