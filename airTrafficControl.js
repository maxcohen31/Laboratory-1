/*
    
    Si consideri il problema di dover prioritizzare l'ordine di atterraggio degli aerei 
    sulla base del loro carburante residuo.

    Un singolo aereo è rappresentato dalla proprietà (coppia chiave-valore) {iata:fuel}, 
    dove iata è una stringa che rappresenta il codice univoco del volo e fuel è un valore numerico >= 0 
    che rappresenta il carburante residuo. 



    Si scriva la funzione torreDiControllo(aerei), dove aerei è un array (non-ordinato) di aerei. 
    La funzione deve ordinare gli elementi dell'array aerei in ordine crescente di fuel 
    (ovvero dal valore più piccolo al più grande). 
    Si noti che il riordinamento deve necessariamente essere effettuato sul solo array aerei, 
    senza l'utilizzo di ulteriori array di appoggio.

    La funzione non deve restituire nulla (no return).

    Esempi:

    aerei = [{AZ100: 56},{LH100: 0.9},{FR99: 12},{AZ800: 7}]

    dopo la chiamata a torreDiControllo(aerei), aerei contiene [{LH100: 0.9},{AZ800: 7},{FR99: 12},{AZ100: 56}]

*/

function torreDiControlo(aerei)
{
    let sorted = aerei.sort((a, b) => {
        return Object.values(a)[0] - Object.values(b)[0];
    });
    return sorted;
}

let aerei = [{AZ100: 56},{LH100: 0.9},{FR99: 12},{AZ800: 7}]
console.log(torreDiControlo(aerei));


