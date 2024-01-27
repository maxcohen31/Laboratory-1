/*
    
    Si scriva una funzione rudyGiuliani(trump,biden,votiLegali) che dati 3 insiemi 
    (trump, biden e votiLegali) rappresentati come oggetti, 
    restituisca (con la stessa rappresentazione) l'insieme contenente 
    sia gli elementi di votiLegali presenti in trump ma non appartenenti a biden 
    che gli elementi di votiLegali presenti in biden ma non appartenenti a trump.



    Esempio:

    Dati

    trump = {'forcoli':1,'lacalifornia':1,'frittole':1,'freddana':1,'bugliano':1,'newfollonica':1}

    biden = {'calafuria':1,'pappiana':1,'forcoli':1,'lacalifornia':1,'massachuccoli':1,'lajatico':1,'newfollonica':1}

    votiLegali = 
    {'calafuria':1,'pappiana':1,'forcoli':1,'massachuccoli':1,
        'larderello':1,'lajatico':1,'frittole':1,'freddana':1,'bugliano':1,'orentano':1,'newfollonica':1}



    avremo

    rudyGiuliani(trump,biden,votiLegali) → 
    {'calafuria':1, 'pappiana':1, 'massachuccoli':1, 'lajatico':1, 'frittole':1, 'freddana':1, 'bugliano':1}
    
*/

function rudyGiuliani(trump, biden, votiLegali)
{
    let result = {};
    for(let vote in trump)
    {
        for(let vote2 in biden)
        {
            if(vote in votiLegali && !(vote in biden))
            {
                result[vote] = 1;
            }
            if(vote2 in votiLegali && !(vote2 in trump))
            {
                result[vote2] = 1;
            }
        }
    }
    return result;
}

let trump = {'forcoli':1,'lacalifornia':1,'frittole':1,'freddana':1,'bugliano':1,'newfollonica':1}

let biden = {'calafuria':1,'pappiana':1,'forcoli':1,'lacalifornia':1,'massachuccoli':1,'lajatico':1,'newfollonica':1}

let votiLegali = {'calafuria':1,'pappiana':1,'forcoli':1,'massachuccoli':1,'larderello':1,'lajatico':1,'frittole':1,'freddana':1,'bugliano':1}

console.log(rudyGiuliani(trump, biden, votiLegali))
