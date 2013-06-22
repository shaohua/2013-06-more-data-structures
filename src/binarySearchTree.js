var BinarySearchTree = function(value){
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype._walker = function(node, input, containFlag){
  containFlag = containFlag || false;

  if(node.value === undefined || node.value === null) {
    node.value = input;
    console.log('inserting', input, node.value);
  } else {
    if(node.value === input){
      console.log("This value is already in the tree!");
      return;
    } else {

      if(node.value > input){

        if(node.right === null || node.right === undefined){
          node.right = new BinarySearchTree(input);
        } else {
          walker(node.right, input);
        }

      } else if(node.value < input) {

          if(node.left === null || node.left === undefined){
            node.left = new BinarySearchTree(input);
          } else {
            walker(node.left, input);
          }

      } else {

        console.log("This is a weird case, fix me!");

      }

    }
  }
};

BinarySearchTree.prototype.insert = function(input){
// Step 1: Go to node and ask, "Am I bigger or smaller than you?"
//         * If smaller, go to left node
//           * If left node is undefined, become the left node
//           * If left node is present, go back to Step 1
//         * If bigger, go to right node
//           * If right node is undefined, become the right node
//           * If right node is present, go back to Step 1

  this._walker(this, input);

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
