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

  while(input.length>0){
    //debugger;
    last_collection = this.root.children;
    var len = input.length;
    //second to last one
    for(var i=0; i<len-1; i++){
      last_collection = last_collection[input[i]].children;
    }
    console.log("Last collection: ", last_collection);
    // debugger;
    // last_collection['u'].children['t'].children
    if( Object.keys(last_collection[input[len-1]].children).length === 0 ) {
      // debugger;
      console.log('-', last_collection[input[len-1]].children);
      console.log("Deleting ", last_collection[input[len-1]]);
      delete last_collection[input[len-1]];
    } else {
      console.log("input before break: ", input);
      break;
    }
    console.log("input: ", input);
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