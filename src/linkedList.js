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
    if(newLinkedList.head !== null){ // if the list is not empty

      if(newLinkedList.tail === newLinkedList.head) { // when there is only one node
        var onlyNode = newLinkedList.head;
        newLinkedList.head = null;
        newLinkedList.tail = null;
        return onlyNode.value;
      } else { // when there are more than one nodes
        newLinkedList.head.next.previous = null;
        newLinkedList.head = newLinkedList.head.next;
        return output.value;
      }

    } else { // if the list is empty, then return null
      return null;
    }

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

  newLinkedList.addToHead = function(value){
    var node = makeNode(value);
    if (newLinkedList.head === null && newLinkedList.tail === null) {
      //this branch deals with an empty list, and then add the first node
      newLinkedList.head = node;
      newLinkedList.tail = node;
    } else {
      //this branch deals with a list with at least one node
    newLinkedList.head.previous = node;
    node.next = newLinkedList.head;
    newLinkedList.head = node; //last step: set list's head to the new node
    }
  };

  newLinkedList.removeTail = function(){
    var output = newLinkedList.tail;
    if(newLinkedList.tail !== null){ // if the list is not empty

      if(newLinkedList.tail === newLinkedList.head) { // when there is only one node
        var onlyNode = newLinkedList.head;
        newLinkedList.head = null;
        newLinkedList.tail = null;
        return onlyNode.value;
      } else { // when there are more than one nodes
        newLinkedList.tail.previous.next = null;
        newLinkedList.tail = newLinkedList.tail.previous;
        return output.value;
      }

    } else { // if the list is empty, then return null
      return null;
    }
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
