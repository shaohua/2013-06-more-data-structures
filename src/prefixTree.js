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

PrefixTree.prototype.remove = function(){

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