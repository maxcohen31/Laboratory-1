/*
    Private members and static keyword
*/


class Persona {
  constructor(nome,età) {
    this.nome=nome
    this.età=età
  }
  compleanno() {
    this.età++
  }
}

class Studente extends Persona {
  laurea() {
    return "Evviva!"
  }
}


class Liceale extends Studente {
    static quanti = 0;
    // Non accessibile all'esterno della classe
    #iscritto = false;
    constructor(nome, età){
        super(nome, età);
        Liceale.quanti++;
    }

    // Possibile leggere il campo se si chiama un metodo
    unipi() {return this.#iscritto}

    // Le proprietà statiche non saranno proprietà delle singole istanze
    // ma della classe stessa.
    static bellaVita() { return true; }
}

var luca=new Liceale("Luca", 15)
var anna=new Liceale("Anna", 16)

console.log(Liceale.quanti)
console.log(luca.unipi()) // false
// console.log(luca.#iscritto) // Non è possibile leggere il campo
console.log(luca.quanti) // undefined
console.log(Liceale)
console.log(Liceale.bellaVita()) // true
console.log(anna.bellaVita()) // TypeError: anna.bellaVita() is not a funtion
