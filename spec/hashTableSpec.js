describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve' and 'remove'. ", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    expect(hashTable.remove).toEqual(jasmine.any(Function));
  });

  it("should add one key-value paire ", function() {
    var index = hashTable.insert('key1', 'value1');
    expect( hashTable._storage.get(index) ).toEqual('value1');
  });

  it("should retrieve one key-value paire ", function() {
    hashTable.insert('key1', 'value1');
    hashTable.retrieve('key1');
    expect(1).toEqual(2);
  });

  it("should remove one key-value paire ", function() {
    hashTable.insert('key1', 'value1');
    hashTable.remove('key1');
    expect(1).toEqual(2);
  });


  // add more tests here to test the functionality of hashTable
});