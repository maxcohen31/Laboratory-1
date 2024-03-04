class BadOpError extends Error { ; }

class NumeroModulare
{
    constructor(v, m)
    {
        this.v = v;
        this.m = m;
        this.numb = v % m;
    } 
    add(n)
    {   
        if (this.m != n.m)
        {
            throw new BadOpError("Not allowed!")
        }
        return NumeroModulare((this.numb + n.v) % this.m, this.m) 
    }

    equal(n)
    {
        return (this.m == n.m) && (this.v == n.v);
    }

    toString()
    {
        
        return `[${this.numb} % ${this.m}]`; 
    }

}

let n1 = new NumeroModulare(17, 5);
let n2 = new NumeroModulare(6, 4);

