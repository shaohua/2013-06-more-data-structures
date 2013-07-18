//http://www.technicalypto.com/2010/04/trie-data-structure-part-2-node-and.html
var PrefixTree = function(){
  this.root = {};
};

PrefixTree.prototype.insert = function(input){
  var node = this.root;

  for(var i=0; i<input.length; i++){
    if(!node[input[i]]) {
      node[input[i]] = {};
    }
    node = node[input[i]];
  }

  node.eos = true; //end of string
};

PrefixTree.prototype.remove = function(input){
  var node, len;
  var eosDeleted = false;

  while(input.length>0){
    node = this.root;
    len = input.length;

    //go to second to last
    for(var i=0; i<len-1; i++){
      node = node[input[i]];
    }
    var last_node = node[input[len-1]];

    if(last_node.eos){
      if(eosDeleted){
        break;
      } else {
        eosDeleted = true;
        delete last_node.eos;
        //such that # of keys will be zero if no other node attached
      }
    }

    if(Object.keys(last_node).length===0){
      delete node[input[len-1]];
    }


    input = input.substr(0, len-1);
  }
};

PrefixTree.prototype.contains = function(input){
  var node = this.root;

  for(var i=0; i<input.length; i++){
    if(!node[input[i]]) {
      return false;
    }
    node = node[input[i]];
  }
  return true;
};