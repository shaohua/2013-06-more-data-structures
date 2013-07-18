//http://www.technicalypto.com/2010/04/trie-data-structure-part-2-node-and.html
var PrefixTree = function(){
  this.root = new TrieNode('');

};

PrefixTree.prototype.insert = function(input){
  var current_collection = this.root.children;

  for(var i=0; i<input.length; i++){
    if(!current_collection.hasOwnProperty(input[i])){
      current_collection[input[i]] = new TrieNode(input[i]);
    }
    if(i===input.length-1) {
      current_collection[input[i]].marker = true;
    }
    current_collection = current_collection[input[i]].children;
  }
};

PrefixTree.prototype.remove = function(input){
  var last_collection;
  var hasDeleted = false;

  //chops off the last character of the string at the end of each loop
  while(input.length>0){
    //always starts from the root
    last_collection = this.root.children;
    var len = input.length;

    for(var i=0; i<len-1; i++){
      last_collection = last_collection[input[i]].children;
    }

    var last_node = last_collection[input[len-1]];
    //length-checks for whether any other word depends on this node
    if( Object.keys(last_node.children).length === 0 ) {
      //marker-checks for shorter words that are a subset of the current string
      if(last_node.marker) {
        if(hasDeleted) {
          break;
        } else {
          hasDeleted = true;
        }
      }
      //delete the actual obj
      delete last_collection[input[len-1]];
    } else {
      break;
    }
    input = input.substr(0,len-1);
  }
};

PrefixTree.prototype.contains = function(input){
  var current_level = this.root.children;

  for(var i=0; i<input.length; i++){
    if(!current_level.hasOwnProperty(input[i])){
      return false;
    }
    current_level = current_level[input[i]].children;
  }

  return true;
};


var TrieNode = function(value){
  this.value = value;
  this.marker = false;
  this.children = {};
};