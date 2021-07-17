class Node {
	constructor(element)
	{
		this.element = element;
		this.next = null
	}
}
class LinkedList {
	constructor()
	{
		this.head = null;
		this.size = 0;
	}


add(element)
{
	console.log("Adding "+element);
	var node = new Node(element);
	var current;
	if (this.head == null)
		this.head = node;
	else {
		current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = node;
	}
	this.size++;
}

insertAt(element, index)
{
	if (index < 0 || index > this.size)
		return console.log("Please enter a valid index.");
	else {
		
		var node = new Node(element);
		var curr, prev;
		curr = this.head;

		if (index == 0) {
			node.next = this.head;
			this.head = node;
		} else {
			curr = this.head;
			var it = 0;
			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}
			node.next = curr;
			prev.next = node;
		}
		this.size++;
	}
}

removeFrom(index)
{
	if (index < 0 || index >= this.size)
		return console.log("Please Enter a valid index");
	else {
		var curr, prev, it = 0;
		curr = this.head;
		prev = curr;		
	if (index === 0) {
			this.head = curr.next;
		} else {	
			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}
			prev.next = curr.next;
		}
		this.size--;
		return curr.element;
	}
}

removeElement(element)
{
	var current = this.head;
	var prev = null;

	while (current != null) {
		
		if (current.element === element) {
			if (prev == null) {
				this.head = current.next;
			} else {
				prev.next = current.next;
			}
			this.size--;
			return current.element;
		}
		prev = current;
		current = current.next;
	}
	return -1;
}

indexOf(element)
{
	var count = 0;
	var current = this.head;

	while (current != null) {
		
		if (current.element === element)
			return count;
		count++;
		current = current.next;
	}

	return -1;
}

isEmpty()
{
	return this.size == 0;
}
size_of_list()
{
	console.log(this.size);
}
printList()
{
	var curr = this.head;
	var str = "";
	while (curr) {
		str += curr.element + " ";
		curr = curr.next;
	}
	console.log("List contains "+str);
}
}


var ll = new LinkedList();

console.log("Is the list empty? "+ll.isEmpty());


ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

console.log("\nDeleted using element name = " + ll.removeElement(50));

ll.printList();

console.log("\nInserting 60 at index 3 ")
ll.insertAt(60, 3);

ll.printList();

console.log("\nDelete element with index 3 = "+ll.removeFrom(3));

ll.printList();

console.log("\nIndex of element 30 = " + ll.indexOf(30));

console.log("\nIs list empty = " + ll.isEmpty());











