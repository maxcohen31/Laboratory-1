/* 
    In JavaScript, si definisca una classe Employee per rappresentare gli impiegati di una ditta, 
    in termini dei loro name e surname. 
    La classe Employee deve inoltre fornire un getter id che restituisca l'identificatore di ciascun impiegato, 
    calcolato concatenando cognome e nome dell'impiegato stesso.

    Si definisca poi una classe Schedule per la gestione dei task assegnati agli impiegati di una ditta. 
   
    L'insieme di tutti i task deve essere privato alla classe. La classe deve inoltre fornire i seguenti metodi:
    - add(task,employee) per l’assegnamento del task (stringa) all’employee passato in input.

    - getTasks(employee), che restituisce un array contenente i task assegnati a employee, 
    ordinati lessicograficamente in ordine crescente. Se l'employee non è presente, restituisce la lista vuota.
    
    - free(employee) per liberare employee, 
    eliminando tutti i suoi task (lanciando l’eccezione MissingEmployee quando employee non esiste).

    NB: Saranno preferite le soluzioni che sfruttino strutture dati efficienti per associare gli employee ai loro task.
*/


class Employee {
    name
    surname

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get id() {
        return this.surname + this.name;
    }
}


class Schedule {
    #task

    constructor() {
        this.#task = {};
    }
    
    add(task, employee) {
        if (!(this.#task[employee.id])) {
            this.#task[employee.id] = [];
        }

        let i = 0;

        while (i < this.#task[employee.id].length && task > this.#task[employee.id][i]) {
            i++;
        }
        this.#task[employee.id].splice(i, 0, task);
    }

    getTasks(employee) {
        if (!(this.#task[employee.id])) {
            return []
        }
        return this.#task[employee.id].sort();
    }

    free(employee) {
        if (!this.#task[employee.id]) {
            throw new MissingEmployee();
        }
        this.#task[employee.id]= [];
    }

}



let pf = new Employee("Pippo","Franco")
let md = new Employee("Mario","Draghi")
let bv = new Employee("Bobo","Vieri")
let s = new Schedule()
s.add("Bagaglino",pf)
console.log(s.getTasks(pf))
s.add("Presidenza",md)
s.add("BCE",md)
console.log(s.getTasks(md))
