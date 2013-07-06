var BinarySearchTree = function(value){
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype._walker = function(node, input){

  if(node.value === undefined || node.value === null) {
    console.log('node is itself');
    return {found: node, pos: "itself"};
    // node.value = input; //return node and 'itself'
    // console.log('inserting', input, node.value);
  } else {
    if(node.value === input){
      console.log("This value is already in the tree!");
      return;
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
  if (result.pos === "itself") {
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
// found = false;
// walker(node){ Go to node, compare 'query' to node.value,
//         if true, found = true, return
//         if query > node.value, current_node = node.right
//         else if query < node.value, current_node = node.left
//         walker(current_node)
// }
// walker(this)
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
// Step 1: Go to node, callback(node)
//         While node has chi

};
