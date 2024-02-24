/*
    Scrivere un generatore wordCloud(t) che, dato un testo t ricevuto in input, 
    restituisce le parole del testo in ordine di frequenza, dalla più frequente alla meno frequente. 
    In caso di parità di frequenze, le restituisce in ordine lessicografico. 
*/


function* wordCount(t)
{
    let arrWords = t.split(" ");
    let counter = {};

    for( let word of arrWords)
    {
        if(word in counter)
        {
            counter[word]++;
        }
        else
        {
            counter[word] = 1;
        }
    }
    
    let zipper = []
    for(let w in counter)
    {
        zipper.push([w, counter[w]])
    }
    
    zipper.sort((z1, z2) => { 
        if(z1[1] > z2[1])
        {
            return -1;
        }
        if(z1[1] < z2[1])
        {
            return 1;
        }
        else
        {
            return 0;
        }

    })

    for(let freq of zipper)
    {
        let p = freq[0];
        yield p;
    }

    

}



let testo = "Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura e nel mezzo della mia vita" 
let x = wordCount(testo)

for(let i = 0; i < 20; i++)
{
    console.log(x.next())
}
