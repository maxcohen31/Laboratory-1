/*
    Dato un nodo n, sia pn la sua profondità e hn l'altezza T(n).
    Diciamo che un nodo è cardine se pn = hn.

*/

function cardine(t, p)
{
    if(!t)
    {
        return -1;
    }

    let alt_sx = cardine(t.sx, p+1);
    let alt_dx = cardine(t.dx, p+1);
    let alt = 1 + Math.max(alt_sx, alt_dx);

    if (alt === p)
    {
        console.log(t.val);
    }
    return alt;
}

let tree = {val: 0, sx: {val:1, dx: {val: 3}}, dx: {val: 2, sx: {val:4, sx: {val: 6, sx : {val:9}}, dx: {val: 7}}, dx: {val:5, dx: {val: 8}}}};
console.log(cardine(tree, 0));
