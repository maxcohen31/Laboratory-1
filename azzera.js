/*
    Dati due interi a e b, azzerare in a i bit settati a 1 in b
*/

function azzera(a, b)
{
  return (~a & b)  
}

console.log(azzera(155, 3))



