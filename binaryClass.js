/*
    Scrivere una classe BinaryInteger che consenta di rappresentare un numero n 
    (intero e positivo) con un campo bits, ovvero un array di 0 e 1 che rappresenti la sua codifica su 8 bit 
    (mettendo il bit più significativo nella posizione 0 dell'array bits, 
    e quello meno significativo nella posizione 7). 
    La classe BinaryInteger deve offrire: 
    un costruttore che dato n generi la sua rappresentazione in bits, 
    lanciando le seguenti eccezioni per possibili errori
    
    InvalidNumberError, se n non è un numero intero positivo
    OutOfRangeError, se n è fuori dal range dei numeri interi positivi che si possono rappresentare con 8 bit
    un getter value che restituisca il valore originale di n

    La classe BinaryInteger deve inoltre offrire un metodo and(x) e or(x) 
    che modifichino il BinaryInteger corrente facendo AND/OR bit-a-bit con i bits del BinaryInteger ottenuto da x. 
    I metodi and(x) e or(x) devono gestire i possibili errori come segue: 
    Se la creazione di un BinaryInteger da x genera un OutOfRangeError, 
    viene considerato il numero 255 al posto di x
    Ogni altra possibile eccezione viene invece inoltrata al chiamante



*/

class InvalidNumberError extends Error { ; }
class OutOfRangeError extends InvalidNumberError { ; }

class BinaryInteger
{
    constructor(n)
    {
        if (n < 0)
        {
            throw new InvalidNumberError("n must be positive");
        }

        else if (n > 255)
        {
            throw new OutOfRangeError("Cannot represent this n with 8 bits only!")
        }

        
        let bits = [0, 0, 0, 0, 0, 0, 0, 0];
        let position = 7;

        while (n > 0 || position > 0)
        {
            let rst = n % 2;
            bits[position] = rst;
            position--;
            n = (n - rst) / 2;
        }
        
        this.toBits = bits;
        
    }

    get integer()
    {
        let original = 0;
        for (let i = 0; i < this.toBits.length; i++)
        {
            original += this.toBits[i] * (2**(7-i));
        }
        return original;
    }

    and(x)
    {
        console.log("inizio")
        let andResult = [];
        
        try
        {
            let newBin = new BinaryInteger(x).toBits;            
            // Bit-a-bit operation
            for (let i = 7; i >= 0; i--)
            {
                andResult.unshift(this.toBits[i] & newBin[i]);
            }
        }
        catch(error)
        {
            if (error instanceof OutOfRangeError)
            {
                let newBin = new BinaryInteger(255).toBits;
                for (let i = 7; i >= 0; i--)
                {
                    andResult.unshift(this.toBits[i] & newBin[i]);
                }
            }
        }
        return andResult
    }

    or(x)
    {
        let andResult = [];
        
        try
        {
            let newBin = new BinaryInteger(x).toBits;            
            // Bit-a-bit operation
            for (let i = 7; i >= 0; i--)
            {
                andResult.unshift(this.toBits[i] | newBin[i]);
            }
        }
        catch(error)
        {
            if (error instanceof OutOfRangeError)
            {
                let newBin = new BinaryInteger(255).toBits;
                for (let i = 7; i >= 0; i--)
                {
                    andResult.unshift(this.toBits[i] | newBin[i]);
                }
            }
        }
        return andResult
    }
}



let bi = new BinaryInteger(5);
let b2 = new BinaryInteger(3);
console.log(bi.toBits)
console.log(bi.integer)
console.log(bi.or(3))
/*
function bin(n)
{
    let bits = [0, 0, 0, 0, 0, 0, 0, 0];
    let position = 0;
    while (n > 0 || position < 7)
    {
        let rst = n % 2;
        bits[position] = rst;
        position++;
        n = (n - rst) / 2;
    }
    return bits;
}
*/


