function nodoacaso(a, b)
{
    if(a >= b || typeof a != "number" || typeof b != "number")
    {
        return undefined;
    }

    // Get the minimum and exclude the maximum
    let interval = b - a;
    let getNumb = Math.floor(Math.random() * interval) + a;  

    return {val: getNumb, sx: {}, dx: {}};
    
}

function aggiungiabr(T, n)
{
   
    if(n.val < T.val)
    {
        if(T.sx)
        {
            aggiungiabr(T.sx, n)
        }
        else
        {
            T.sx = n;
        }

        if(T.dx)
        {
            aggiungiabr(T.dx, n)
        }
        else
        {
            T.dx = n;
        }
    }
}

function bstToArray(tree) 
{
    
    if(tree == null) { return []; }     
    
    return [...bstToArray(tree.dx),tree.val,...bstToArray(tree.sx)];

}

function granchio(T, k)
{
    let result = bstToArray(T);
    if(k >= result.length)
    {
        return result
    }
    return result.slice(0, k);

}

// soluzione più efficiente
function granchio(t,k) {
  if (!t)
    return []
  else {
    let arr = granchio(t.dx,k)
    k = k - arr.length
    if (k > 0) {
      arr.push(t.val)
      k--
    }
    if (k > 0) {
      arr.push(...granchio(t.sx,k))
    }
    return arr
  }
}

let T = {val:7,sx:{val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4, dx:{val:8}, sx:{val: 2}}}}, dx:{val: 11, dx: {val: 18}, sx: {val:3, sx: {val: 2}}}}


let t = {"val":15,"sx":{"val":0,"dx":{"val":1,"dx":{"val":2,"dx":{"val":3,"dx":{"val":4,"dx":{"val":5,"dx":{"val":6,"dx":{"val":7,"dx":{"val":8,"dx":{"val":9,"dx":{"val":10,"dx":{"val":11,"dx":{"val":12,"dx":{"val":13,"dx":{"val":14}}}}}}}}}}}}}}},"dx":{"val":15,"dx":{"val":16,"dx":{"val":17,"dx":{"val":18,"dx":{"val":19}}}}}}

//console.log(granchio(t, 3)) // 18, 12, 8
console.log(bstToArray(t))
console.log(granchio(T, 5))

