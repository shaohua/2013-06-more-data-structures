var HashTable = function(){
  this._limit = 2;

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

HashTable.prototype.reHash = function(new_limit){
  var retrievedArray = [];
  for(var i=0; i < this._limit; i++){
    retrievedArray.push( this._storage.get(i) );
  }

  console.log(retrievedArray);

  var output_hashtable = new HashTable();
  //todo, fix two lines below, monkey patch
  output_hashtable._limit = new_limit;
  output_hashtable._storage = makeLimitedArray(new_limit);

  for(var index=0; index < retrievedArray.length; index++){
    for(var j=0; j < retrievedArray[index].length; j++){
      output_hashtable.insert(retrievedArray[index][j][0], retrievedArray[index][j][1]);
    }
  }

  // debugger;
  return output_hashtable;

};

HashTable.prototype.insert = function(key, value){
  var index = this.quickHash(key);
  var input = [key, value];
  var retrievedArray = this._storage.get(index) || [];

  //Checking to see if our array index already contains the key.
  //If yes, overwrite it. If no, push the new key:value pair to the array.
  var found = false;
  for (var i=0; i<retrievedArray.length; i++){
    if (retrievedArray[i][0] === key) {
      retrievedArray[i][1] = value;
      found = true;
    }
  }

  if (!found) {
    retrievedArray.push(input);
  }

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
  var retrievedArray = this._storage.get(index);
  for (var i=0; i<retrievedArray.length; i++) {
    if (retrievedArray[i][0] === key) {
      retrievedArray.splice(i,1);
    }
  }
  this._storage.set(index, retrievedArray);
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you