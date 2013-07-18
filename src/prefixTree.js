//http://www.technicalypto.com/2010/04/trie-data-structure-part-2-node-and.html
var PrefixTree = function(){
  this.root = new TrieNode('');

};

PrefixTree.prototype.insert = function(input){
  var current_level = this.root.children;

  for(var i=0; i<input.length; i++){
    if(!current_level.hasOwnProperty(input[i])){
      current_level[input[i]] = new TrieNode(input[i]);
    }
    if(i===input.length-1) {
      current_level.marker = true;
    }
    current_level = current_level[input[i]].children;
  }

};

PrefixTree.prototype.remove = function(){

};

PrefixTree.prototype.contains = function(){

};


var TrieNode = function(value){
  this.value = value;
  this.marker = false;
  this.children = {};
};