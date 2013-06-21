var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(input){
  this._storage = this._storage || {};
  if( !this.contains(input) && (typeof input === 'string') ){
    this._storage[input] = '';
  }
};

setPrototype.contains = function(input){ // assuming input is a string for now!
  if ( this._storage.hasOwnProperty(input) ) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(){
};
