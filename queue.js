class Queue
{
    constructor()
    {
        this.items = [];
    }
enqueue(x)
{   
    this.items.push(x);
    console.log("Pushed "+x);
}

dequeue()
{
    if(this.isEmpty())
        return "Underflow";
    else    
    return ("popped "+this.items.shift());
}
printQueue()
{
    var str = "";
    if(this.isEmpty())
        return "Queue is empty";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return ("Queue elements are "+str);
}
isEmpty()
{
    return this.items.length == 0;
}
}

var queue = new Queue();

console.log(queue.dequeue());
  
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
 
console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.printQueue());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.printQueue());


