/*
    Si realizzi un sistema per la gestione dei voti di uno studente universitario:
    Classe Grade per rappresentare un esame sostenuto, 
    in termini di nome (name) e crediti (credits) // serve per esami senza voto, es. “Inglese
    Classe GradeWithValue per rappresentare un esame in termini di nome (name), crediti (credits), voto (grade) 
    ed eventuale lode (honors)
    Entrambe le classi devono fornire i metodi

    - equals(g), per verificare se un esame sia uguale ad un altro (ovvero abbia lo stesso nome e gli stessi crediti) 
    - toString(), per dare una rappresentazione dell’esame sotto forma di stringa

*/

// Gerarchia errori
class GradeBookError extends Error { ; }
class MissingCreditsError extends GradeBookError { ; }
class DuplicateGradeError extends GradeBookError { ; }
class InvalidGradeError extends GradeBookError { ; }
class InvalidCreditsError extends InvalidGradeError { ; }
class InvalidValueError extends InvalidGradeError { ; }


class Grade
{
    constructor(name, credits)
    {
        this.name = name;
        this.credits = credits;
        if(this.credits < 0)
        {
            throw new InvalidCreditsError("Credits must be positive and between 18 and 30!");
        }
    }
    
    // Verifica se due esami sono uguali
    equals(g)
    {
        return (this.name == g.name) && (this.credits == g.credits);
    }

    toString()
    {
        return `Name: ${this.name} -> Credits: ${this.credits}`;
    }
}


class GradeWithValue extends Grade
{
    constructor(name, credits, grade, honors=false)
    {
        super(name, credits);
        // Controllo sul voto
        if(this.grade < 18 || this.grade > 30)
        {
            throw new InvalidValueError("Grade must be between 18 and 30!");
        }
        // Controllo lode
        else if(honors && this.grade != 30)
        {
            throw new InvalidValueError("Grade must be 30!");
        }
        this.grade = grade;
        this.honors = honors;
    }
        
    equals(g)
    {
        return (this.name == g.name) && (this.credits == g.credits);
    }
    
    toString()
    {
        return `Name: ${this.name} -> Grade: ${this.grade} -> Credits ${this.credits}`
    }
}


class Gradebook
{
    constructor(totalCredits)
    {
        if(!isNaN(this.totalcredits) || this.totalcredits < 0)
        {
            throw new InvalidValueError("Credits must be positive!");
        }
        this.grades = [];
        this.totalcredits = totalCredits;
    }

    // Ritorna i crediti conseguiti
    get credits()
    {
        let credits = 0;
        for (let g of this.grades)
        {
            credits += g.credits;
        }
        return credits;
    }

    // Aggiunge un esame a this.grades
    register(g)
    {
        if (!(g instanceof Grade)) 
        {
            throw new TypeError("grade must be an istance of Grade object!")
        }
        for (let i of this.grades)
        {
            if(i.equals(g))
            {
                throw new DuplicateGradeError("Grade already exists!");
            }
        }
        this.grades.push(g);
        
    }

    // Crediti mancanti alla laurea
    get missingCredits()
    {
        return this.totalcredits - this.credits;
    }

    // Ritorna la media ponderata degli esami sostenuti
    get average()
    {
        let sum = 0;
        let credits = 0;
        for (let g of this.grades)
        {
            if (g instanceof GradeWithValue)
            {
                credits += g.credits;
                if (g.honors)
                {
                    // 30 e lode è un 32
                    sum += 32 * this.credits; 
                }
                else
                {
                    sum += (g.grade * g.credits);
                }
            }
        }
        return Math.round(10 * (sum / credits)) / 10;
    }
    
    // Voto iniziale di laurea
    get startingGrade()
    {
        return (this.average * 110) / 30;
    }

    toString()
    {
        let result = "";
        for (let g of this.grades)
        {
            result += `Name: ${g.name} (${g.credits}) - Grade: ${g.grade}\n`;
        }
        return result + `=========================\nTotal credits: ${this.totalcredits}`;
    }

}

// Classe BachelorGradeBook eredità da Gradebook ma parte con 120 totalCredits
class BachelorGradeBook extends Gradebook
{
    constructor()
    {
        super(120);
    }
}


// Classe MasterGradeBook eredità da Gradebook ma parte con 180 totalCredits
class MasterGradeBook extends Gradebook
{
    constructor() 
    {  
        super(180);
    }
}
