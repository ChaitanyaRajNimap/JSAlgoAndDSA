//Implementing list Node
class ListNode {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

//Implementing linked list
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

//Creating nodes
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

//creating linked list
let list = new LinkedList(node1);

//accessing the nodes
console.log("Accsessing node : ", list.head.next.data); //returns 5

/*
Linked list methods
1. size() = This method returns the number of nodes present in the linked list.
2. clear()
3. getLast()
4. getFirst()
*/

const size = () => {
  let count = 0;
  let node = this.head;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
};

const clear = () => (this.head = null);

const getLast = () => {
  let lastNode = this.head;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
  }
  return lastNode;
};

const getFirst = () => this.head;
