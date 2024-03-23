/*
    Si definisca in JS una classe Imbarcazione che consenta di rappresentare imbarcazioni generiche, 
    specificandone il nome (come unico campo della classe). 
    Si estenda poi la classe Imbarcazione in modo da consentire la rappresentazione delle seguenti imbarcazioni:

    Nave, che oltre al nome dell'imbarcazione indica il porto in cui è stata fabbricata;
    Barca, che oltre al nome dell'imbarcazione indica la sua lunghezza in metri;
    Motoscafo, un tipo speciale di Barca che indica anche il numero di motori che ha a disposizione.
    La classe Barca deve consentire l'accesso al campo lunghezza anche mediante i getter/setter denominati metri.



    Si definisca poi una funzione trovaBarca che, dato un array di imbarcazioni, 
    restituisce il nome della barca la cui lunghezza (in metri) è la più grande tra quelle contenute nell'array. 
    La funzione trovaBarca deve rispettare le seguenti condizioni:

    Se non ci sono barche nell'array, restituisce undefined.
    A parità di lunghezza, viene restituito il nome della barca incontrata per prima 
    (ovvero quella avente indice minore nell'array).    
*/

class Imbarcazione {
    nome = "";
    
    constructor(nome) {
        this.nome = nome;
    }
}

class Nave extends Imbarcazione {
    constructor(nome, porto) {
        super(nome);
        this.porto = porto;
    }
}

class Barca extends Imbarcazione {
    constructor(nome, lunghezza) {
        super(nome);
        this.lunghezza = lunghezza;
    }

    get metri() {
        return this.lunghezza;
    }

    set metri(m) {
        this.lunghezza = m;
    }
}

class Motoscafo extends Barca {
    constructor(nome, lunghezza, motori) {
        super(nome, lunghezza);
        this.motori = motori; 
    }
}

function trovaBarca(barche)
{
    
    let boats = barche.filter((a) => (a instanceof Barca));
    [result, ...elements] = boats;
    
    for (let i = 0; i < elements.length; i++)
    {
        if (result.lunghezza < elements[i].lunghezza)
        {
            result = elements[i];
        }
        else
        {
            return result.nome;
        }
    }
    return  elements.length > 0 ? result.nome : undefined;
}

// Soluzione proposta
function trovaBarca2(barche) {
  let laBarca = undefined
  for (b of barche) {
    if (b instanceof Barca) {
      if (!laBarca || b.lunghezza > laBarca.lunghezza)
        laBarca = b
    }
  }
 return laBarca ? laBarca.nome : undefined
}


bb = [
  //new Barca("BoiaDe",6.5),
  new Nave("Shelly","Hamburg (DE)"),
  new Motoscafo("Principino",5,3),
  new Nave("Melly","Marseille (FR)"),
  new Motoscafo("Ginger IV",5,2)
]

console.log(trovaBarca(bb))
