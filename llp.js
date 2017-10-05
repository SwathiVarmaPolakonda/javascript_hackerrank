//each pointer has a reference to a node object
//until we reach the tail, null
this.insert = function(head, data) {
  //complete this method

  //base case, empty list return a new node with data
  //pointer next is null
  if (head == null) {
    return new Node(data);
  }

  // walk through the node if to reach the tail if needed
  var currentNode = head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  //when we reach the tail, add new node with data
  currentNode.next = new Node(data);
  return head;
};

//2
this.insert = function(head, data) {
  //complete this method
  if (head == null) {
    return new Node(data);
  } else if (head.next == null) {
    head.next = new Node(data);
  } else {
    this.insert(head.next, data);
  }
  return head;
};
