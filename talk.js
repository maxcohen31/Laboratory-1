/*   
    Si consideri un sistema di gestione di talk, 
    dove un generico talk è rappresentabile mediante la classe Talk, 
    i cui campi sono title (stringa), speaker (stringa) e duration (numerico, in minuti). 
    Il sistema prevede la possibilità di definire tre tipi specifici di Talk, ovvero Lecture, Seminar e Webinar:

    La classe Lecture rappresenta una lezione di un dato course, 
    indicato nel costruttore, e fornisce un getter-setter teacher che corrisponde allo speaker del talk in questione.
    La classe Seminar rappresenta un seminario tenuto all'interno di un dato event, indicato nel costruttore.
    La classe Webinar che rappresenta anch'essa un seminario tenuto all'interno di un event, 
    con tale evento però tenuto online.
    Si noti quindi che Webinar costituisce un caso specifico di Seminar.



    Si implementino le classi Talk, Lecture, Seminar e Webinar, 
    organizzandole in modo da sfruttare al meglio l'ereditarietà. 
    Si implementi inoltre una funzione pickSeminar che, dato un array talks di Talk, 
    restituisce il titolo del seminario più breve contenuto in talks. Se non ci sono seminari, restituisce undefined.

*/

class Talk {
    title = "";
    speaker = "";
    duration = "";

    constructor(title, speaker, duration) {
        this.title = title;
        this.speaker = speaker;
        this.duration = duration;
    }
}

class Lecture extends Talk {
    constructor(title, speaker, duration, course) {
        super(title, speaker, duration);
        this.course = course;
    }

    get teacher() {
        return this.speaker;
    }

    set teacher(t) {
        this.speaker = t;
    }
}

class Seminar extends Talk {
    constructor(title, speaker, duration, event) {
        super(title, speaker, duration);
        this.event = event;
    }
}

class Webinar extends Seminar {
    constructor(title, speaker, duration, event) {
        super(title, speaker, duration, event);
    }
}


function pickSeminar(a) {
   
    let seminar = a.filter((x) => (x instanceof Seminar));
    
    if (seminar.length === 0) {
        return undefined;
    }

    let result = seminar[0];
    for (let i = 0; i < seminar.length; i++) {
        if (seminar[i].duration < result.duration) {
            result = seminar[i];
        }
    }
    return result.title;

}


let talks = [
    new Lecture("TypeScript I","J. Soldani",120,"Laboratorio 1"),
    new Seminar("Deep Learning in 10'","D. Bacciu",10,"The ML Conference"),
    new Lecture("TypeScript II","J. Soldani",120,"Laboratorio 1"),
    new Lecture("Ricorsione","G. Prencipe",120,"Programmazione & Algoritmica"),
    new Webinar("Human Computer Interaction","A. Malizia",100,"HCI"),
    new Seminar("Synchronized Dancing of Oblivious Chameleons","G. Prencipe",60,"FUN"),
]

console.log(pickSeminar(talks))
