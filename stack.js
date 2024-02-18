/*
    Implementation of a stack using classes
*/


class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}


class Stack
{
    constructor()
    {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // isEmpty - return a boolean 
    isEmpty()
    {
        if(this.size === 0)
        {
            return true;
        }
        return false;
    } 

    // Push - add an element to the top of the stack
    push(val)
    {
        let element = new Node(val);
        // Check if stack is empty
        if(this.isEmpty())
        {
            this.first = element;
            this.last = element;
        }
        else
        {
            let temp = this.first;
            this.first = element;
            this.first.next = temp;
        }
        return this.size++;
    }
    
    pop()
    {
        if(this.isEmpty())
        {
            return -1;
        }
        
        let toPop = this.first;
        // check if stack has one element
        if(this.first === this.last)
        {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return toPop.value;
    }

}


let s = new Stack;

s.push(1);
s.push(4);
s.push(5);
console.log(s.first)
console.log(s.size)
s.push(111);
console.log(s)
console.log(s.size)
console.log(s.pop())
console.log(s.size)
