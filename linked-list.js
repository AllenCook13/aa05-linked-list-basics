class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0 
  }

  addToHead(val) {
    let newNode = new LinkedListNode(val)
     if(!this.head) {
      this.head = newNode
     }
     newNode.next = this.head
     this.head = newNode
     this.length++
  }

  addToTail(val) {
    let newNode = new LinkedListNode(val)
    this.length++
    if(!this.head) {
      this.head = newNode
      return this
    } 
    let cur = this.head
    while(cur.next) {
      cur = cur.next
    }
    cur.next = newNode
  }

  // You can use this function to help debug
  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
