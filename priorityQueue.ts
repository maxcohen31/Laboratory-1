/*
    Coda con priorità in Typescript con max heap 
*/

class SizeError extends Error { ; }

class NodeHeap<T> {
    val: T;
    priority: number;

    constructor(val: T, priority: number) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue<T> {
    size: number;
    items: NodeHeap<T>[];

    constructor(size?: number) {
        if (size && size > 10) {
            throw new SizeError("Size must be 10 or lesser")
        }
        if (!size) {
            this.size = 10;
        }
        else {
            this.size = size;
        }

        this.items = [];
    }

    isFull(): boolean {
        return this.items.length >= this.size;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    enqueue(n: T, p: number): boolean {
        if (this.isFull()) {
            return false;
        }

        let flag: boolean = false;
        let elem: NodeHeap<T> = new NodeHeap(n, p);
        let i: number = 0;
        
        while (i < this.items.length && elem.priority < this.items[i].priority) {
            i++;
        }

        this.items.splice(i, 0, elem);
        flag = true;

        if (!flag) {
            this.items.push(elem);
        }
        return flag;
    }

    deque(): boolean|void {
        if (this.isEmpty()) {
            return false;
        }
        this.items.pop();
    }

    print(): T[] {
        let result: T[] = [];
        for (let i: number = 0; i < this.items.length; i++) {
            result.push(this.items[i].val)
        }
        return result;
    }
}


let pq = new PriorityQueue<string>(5);

console.log(pq.enqueue("zio Peppe", 4));
pq.enqueue("Mhanz", 1);
pq.enqueue("Lisciami le mele", 2);
console.log(pq.print());
