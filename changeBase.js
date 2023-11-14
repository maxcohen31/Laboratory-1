/*

    Scrivere una funzione che dato un parametro intero e una base
    stampa l'intero nella base specificata.
*/


function change_base(n, base)
{
    let symb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let result = [];

    while(n > 0)
    {
        let rst = n % base;
        result.unshift(symb[rst]);
        n = (n - rst) / base;
    }

    return result
}

console.log(change_base(0o01000000, 10))
