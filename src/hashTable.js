var HashTable = function(){
  this._limit = 1;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.quickHash = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  index = Number(index);
  return index;
};

HashTable.prototype.insert = function(key, value){
  var index = this.quickHash(key);
  var input = [key, value];
  var retrievedArray = this._storage.get(index) || [];
  retrievedArray.push(input);
  this._storage.set(index, retrievedArray);
  return index;
};

HashTable.prototype.retrieve = function(key){
  var key_value_pair = this._storage.get(this.quickHash(key));
  if (key_value_pair === undefined) {
    return undefined;
  } else {
    for (var i=0; i<key_value_pair.length; i++) {
      if (key_value_pair[i][0] === key) {
        return key_value_pair[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(key){
  var index = this.quickHash(key);
  this._storage.set(index, undefined);
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you