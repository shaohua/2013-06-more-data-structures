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

  it("should add one key-value pair ", function() {
    var index = hashTable.insert('key1', 'value1');
    expect( hashTable.retrieve('key1')).toEqual('value1');
  });

  it("should retrieve one key-value pair ", function() {
    hashTable.insert('key1', 'value1');
    expect(hashTable.retrieve('key1')).toEqual('value1');
  });

  it("should remove one key-value pair ", function() {
    hashTable.insert('key1', 'value1');
    hashTable.remove('key1');
    expect(hashTable.retrieve('key1')).toEqual(undefined);
  });

  it("should add two key-value pairs", function() {
    var index1 = hashTable.insert('key1', 'value1');
    var index2 = hashTable.insert('key2', 'value2');
    expect( hashTable.retrieve(index1) ).toEqual('value1');
    expect( hashTable.retrieve(index2) ).toEqual('value2');
  });

  it("should retrieve two key-value pairs", function() {
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');
    expect(hashTable.retrieve('key2')).toEqual('value2');
  });

  it("should remove two key-value pairs", function() {
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');
    hashTable.remove('key1');
    hashTable.remove('key2');
    expect(hashTable.retrieve('key1')).toEqual(undefined);
    expect(hashTable.retrieve('key2')).toEqual(undefined);
  });


  // add more tests here to test the functionality of hashTable
});