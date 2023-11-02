//contains(S,val) → funzione che verifica se val ∊ S
function contains(S, val)
{
    return val in S; 
}

//insert(S,val) → funzione che inserisce val nell’insieme S
function insert(S, val)
{
    if(!(contains(S, val)))
    {
        S[val] = 1;
    }
}

//remove(S,val) → funzione che rimuove val dall’insieme S
function remove(S, val)
{
    delete S[val];
}

//subset(A,B) → funzione che verifica se A ⊆ B
function subset(A, B)
{
    // controlliamo che gli elementi di A siano in B
    for(let a in A)
    {
        if(!(contains(B, a)))
        {
            return false;
        }
    }
    return true;
        
}


//equal(A,B) → funzione che verifica se A = B
function equal(A, B)
{
    // Gi elementi di A sono uguali agli elementi di B e viceversa
    for(let a in A)
    {
        for(let b in B)
        {
            if(a != b)
            {
                return false;
            }
        }
    }
    return true;
}

// Better equal
function betterEqual(A, B)
{
    return subset(A, B) && subset(B, A);
}

//intersection(A,B) → funzione che restituisce A ∩ B
function intersection(A, B)
{
    let X = {};
    for(let a in A)
    {
        if(contains(B, a))
        {
            X[a] = 1;
            // insert(X, a);
        }
    }
    return X;
}

//subtract(A,B) →funzione che restituisce A - B
function subtract(A, B)
{
    let X = {};
    for(let a in A)
    {
        if(!(contains(B, a)))
        {
            insert(X, a);
        }
    }
    return X;
}

//union(A,B) → funzione che restituisce A U B
function union(A, B)
{
    let X = {};
    
    for(let a in A)
    {
        insert(X, a); 
    }

    for(let b in B)
    {
        insert(X, b);
    }
    return X;
}

//cardinality(A) → funzione che calcola | A |
function cardinality(A)
{
    let countElement = 0;

    for(let a in A)
    {
        countElement++;
    }
    return countElement;
}


//jaccard(A,B) → funzione che calcola la similarità di 
//Jaccard tra due insiemi = (| A ∩ B | / | A U B |)
function jaccard(A, B)
{
    return (cardinality(intersection(A, B)) / cardinality(union(A, B)));
         
}



set1 = { "ema": 1, "paolo": 1, "gerryscotti": 1};
set2 = { "francesca": 1};
set3 = { "elisa": 1, "ema": 1};
set4 = {};
set5 = { "ema": 1};
set6 = { "ema": 1};
set7 = { "elisa": 1, "gerryscotti": 1};
set8 = { "katia": 1, "bellofigo": 1};
console.log("Contains: ", contains(set1, "ema"));
insert(set2, "ema")
console.log("set2 dopo insert ->", set2);
//remove(set1, "paolo");
console.log("set1 dopo remove paolo: ",set1);
console.log("set5 è sottoinsieme di set1:", subset(set4, set3));
console.log("set3 e set1 sono uguali:", equal(set3, set1));
console.log("set5 e set6 sono uguali:", betterEqual(set5, set6));
console.log("Intersezione set7 con set1:", intersection(set7, set1));
console.log("Differenza tra set3 e set5:", subtract(set3, set5));
console.log("Differenza tra set5 e set5:", subtract(set5, set5));
console.log("Unione tra set8 e set1:", union(set1, set8));
console.log("Cardinalità set1:", cardinality(set1));
