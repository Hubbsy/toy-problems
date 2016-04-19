var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  // node.previous = null;

  return node;
};

var LinkedList = function (initialValue) {
  // var list = {};
  this.head = null;
  this.tail = null;
  if(initialValue) {
    this.addToTail(initialValue);
  }

};

// addToTail
LinkedList.prototype.addToTail = function(value) {
  if(this.head === null) {
    this.head = Node(value);
    this.tail = this.head;
  } else {
    this.tail.next = Node(value);
    this.tail = this.tail.next;
  }
}
// removeHead
LinkedList.prototype.removeHead = function() {
    // var current = this.head.value;
    if(!this.head) {
      return null;
    }

    if(!this.head.next) {
      delete this.head;
      delete this.tail;
      return null;
    }
    this.head = this.head.next;
    // return current;
}
// contains
LinkedList.prototype.contains = function(target) {
  var current = this.head;
  while(current) {
    if(current.value === target) {
      return true;
    }
    current = current.next;
  }
  return false;
}
