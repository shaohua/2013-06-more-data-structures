// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    var node = makeNode(value);
    if (newLinkedList.head === null && newLinkedList.tail === null) {
      //this branch deals with an empty list, and then add the first node
      newLinkedList.head = node;
      newLinkedList.tail = node;
    } else {
      //this branch deals with a list with at least one node
    newLinkedList.tail.next = node;
    node.previous = newLinkedList.tail;
    newLinkedList.tail = node;
    }
  };

  newLinkedList.removeHead = function(){
    var output = newLinkedList.head;
    newLinkedList.head.next.previous = null;
    newLinkedList.head = newLinkedList.head.next;
    return output.value;
  };

  newLinkedList.contains = function(search){
    var currentNode = newLinkedList.head;
    while (currentNode) {
      if (currentNode.value === search){
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  newLinkedList.addToHead = function(){
  };

  newLinkedList.removeTail = function(){

  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;
  newNode.previous = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};
