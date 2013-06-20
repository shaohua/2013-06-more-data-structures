// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    var node = makeNode(value);
    if (newLinkedList.head === null && newLinkedList.tail === null) {
      newLinkedList.head = node;
      newLinkedList.tail = node;
    } else {
    newLinkedList.tail.next = node;
    newLinkedList.tail = node;
    }
  };

  newLinkedList.removeHead = function(){
    var output = newLinkedList.head;
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

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};
