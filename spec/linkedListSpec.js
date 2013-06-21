describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should have methods named 'addToHead', 'removeTail'", function() {
    expect(linkedList.addToHead).toEqual(jasmine.any(Function));
    expect(linkedList.removeTail).toEqual(jasmine.any(Function));
  });


  it("should be able to add nodes", function() {
    linkedList.addToTail('bar1');
    expect(linkedList.tail.value).toEqual('bar1');
  });

  it("should be able to add multiple nodes", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.tail.value).toEqual('bar4');
  });

  it("should be able to return a value for previous", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.tail.previous.value).toEqual('bar3');
  });

    it("removeHead should change next's previous value to null", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    linkedList.removeHead();
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.tail.previous).toEqual(null);
  });

  it("addToHead should add a new node to the head and change newLinkedList's head property", function() {
    linkedList.addToHead('bar1');
    linkedList.addToHead('bar2');
    linkedList.addToHead('bar3');
    linkedList.addToHead('bar4');
    expect(linkedList.head.previous).toEqual(null);
    expect(linkedList.head.value).toEqual('bar4');
  });

  it("addToHead should add a node in the correct order with removeHead calls as well", function() {
    linkedList.addToHead('bar1');
    linkedList.addToHead('bar2');
    linkedList.removeHead();
    linkedList.addToHead('bar3');
    linkedList.addToHead('bar4');
    linkedList.removeHead();
    expect(linkedList.head.previous).toEqual(null);
    expect(linkedList.head.next.value).toEqual('bar1');
    expect(linkedList.head.value).toEqual('bar3');
  });

  it("adding multiple nodes shouldn't change the head", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.head.value).toEqual('bar1');
  });

  it("removeHead should work with empty list", function() {
    expect(linkedList.removeHead()).toEqual(null);
  });

  it("removeHead should return the correct value", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.removeHead()).toEqual('bar1');
  });

  it("removeHead should work with one node lists", function() {
    linkedList.addToHead('bar1');
    linkedList.addToHead('bar2');
    linkedList.removeHead();
    linkedList.addToHead('bar3');
    linkedList.removeHead();
    linkedList.addToHead('bar4');
    linkedList.removeHead();
    expect(linkedList.removeHead()).toEqual('bar1');
  });

  it("removeTail should work with empty list", function() {
    expect(linkedList.removeTail()).toEqual(null);
  });

  it("removeTail should return the correct value", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.removeTail()).toEqual('bar4');
  });

  it("removeTail should delete the tail node", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.contains('bar4')).toEqual(true);
    expect(linkedList.removeTail()).toEqual('bar4');
    expect(linkedList.contains('bar4')).toEqual(false);
  });

  it("removeTail should work with multiple additions and deletions", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.removeTail();
    linkedList.addToTail('bar3');
    linkedList.removeTail();
    linkedList.addToTail('bar4');
    linkedList.removeTail();
    expect(linkedList.removeTail()).toEqual('bar1');
  });

    it("contains should return the correct boolean value", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.contains('bar3')).toEqual(true);
    expect(linkedList.contains('hi Shao')).toEqual(false);
  });

  // it("should have a head and tail", function() {
  //   expect(Object.keys(linkedList)).toContain("head");
  //   expect(Object.keys(linkedList)).toContain("tail");
  // });

  // it("should have a head and tail", function() {
  //   expect(Object.keys(linkedList)).toContain("head");
  //   expect(Object.keys(linkedList)).toContain("tail");
  // });

  // add more tests here to test the functionality of linkedList
});