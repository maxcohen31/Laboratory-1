/*
    Un multiinsieme è una generalizzazione del concetto di insieme in cui lo stesso elemento può apparire più volte. Si potrebbe rappresentare un multiinsieme come un array, per esempio: [4, 7, 10, 4, 9, 7, 4]. Lo si potrebbe anche rappresentare come un oggetto, in cui gli elementi sono le chiavi, e i corrispondenti valori indicano quante volte compare quell’elemento. L’array precedente può dunque essere rappresentato come { 4: 3, 7: 2, 9: 1, 10: 1}.

Si scriva una funzione 
 che, data la rappresentazione ad array di un multiinsieme (di interi o stringhe), restituisca la corrispondente rappresentazione a oggetto.
*/

function cvtmi2(a)
{
    let result = {};

    for(let i = 0; i < a.length - 1; i++)
    {
        let counter = 0;

        for(j = 0; j < a.length; j++)
        {
            if(a[i] == a[j])
            {
                counter += 1;
            }
        }
        result[a[i]] = counter;
    }
    return result;
}

console.log(cvtmi2(['pera', 'zucca', 'mela', 'mela']));
