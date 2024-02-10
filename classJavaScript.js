/*
    Esempio di implementazione di una classe in JS.
*/


class Esame
{
    constructor(materia, data, voto, cfu=6)
    {
        this.materia = materia;
        this.data = data;
        this.voto = voto;
        this.cfu = cfu;
    }

    equals(e)
    {
        return this.materia == e.materia && this.voto == e.voto
        && this.data == e.data && this.cfu == e.cfu
        
        // Altro modo
        /*
        for(let k in this)
        {
            if(this[k] != e[k])
            {
                return false;
            }
        }
        return true;
        */
    }

    toString()
    {
        return this.materia + " - ( " + this.cfu + " )" + ": " + this.voto; 
    }

}



class Studente
{
    constructor(cognome, nome, matricola, anno)
    {
        this.cognome = cognome;
        this.nome = nome;
        this.matricola = matricola;
        this.anno = anno;
        this.voti = [];
    }

    avg()
    {
        let somma = 0;
        let cfu = 0;
        for(let v of this.voti)
        {
            somma += v.voto * cfu;
            cfu += v.voto;
        }
        return somma/cfu;
    }
    
    crediti()
    {
        let somma = 0;
        for(let c of this.voti)
        {
            somma += c.cfu;
        }
        return somma;
    }

    anni()
    {
        let annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }
    
    ordinaVoti()
    {
        return this.voti.sort();
    }
    
    equals(s)
    {
        return this.matricola == s.matricola;
    }

}




let e1 = new Esame("Lab 1", "12/3/2023", 25, 12);
let e2 = new Esame("Analisi", "23/4/2023", 24, 12);
let e3 = new Esame("Analisi", "23/4/2023", 24, 12);
let e4 = new Esame("FdI", "8/2/2022", 25, 9);
let e5 = new Esame("Algo", "10/3/2021", 28, 15);
//console.log(e1.toString())
//console.log(e1.equals(e3))
//console.log(e2.equals(e3))


let s1 = new Studente("Gosto", "Shepard", 542349, 2019);
let s2 = new Studente("Laurie", "Campbell", 543457, 2020);
let s3 = new Studente("Dick", "Tracy", 563333, 2020);
s1.voti.push(e1);
s1.voti.push(e2);
s2.voti.push(e3);
s2.voti.push(e4);
s3.voti.push(e1);
s3.voti.push(e5);

console.log(s1.avg())
console.log(s1.anni())
console.log(s1.ordinaVoti())
console.log(s1.equals(s2))

// Definiamo una funzione che calcola il "migliore" della classe, secondo la seguente politica:
// - media più alta,
// - a parità di media, maggior numero di cfu conseguiti, e
// - a paritaà di media e cfu, il minor numero di anni passati


let classe = [s1, s2, s3];

function migliore(c)
{
    if(c.length == 0)
    {
        return null;
    }
    let best = c[0];

    for(let i = 0; i < classe.length; i++)
    {
        if(c[i].avg() > best.avg())
        {
            best = c[i];
        }
        else if(c[i].avg == best.avg())
        {
            if(c[i].crediti() > best.crediti())
            {
                best = c[i];
            }
            else if(c[i].crediti() == best.crediti())
            {
                if(c[i].anni() < best.anni())
                {
                    best = c[i];
                }
                    
            }
        }
    } 
    return best;
}

console.log(migliore(classe))




