/*

    Si scriva una classe Animal per rappresentare un generico animale, 
    offrendo un metodo sound che lanci un’eccezione UnknownSoundError per default. 
    Si definiscano poi le classi Bird per rappresentare un uccello con verso “Cip cip”
    Chicken per rappresentare una gallina con verso “Coccodé”
    Pig per rappresentare un maiale con verso “Oink oink”
    ridefinendo opportunamente i corrispondenti metodi sound

    Si scriva poi due funzioni sounds(a) e birdsounds(a) che, dato un array a di Animal, 
    visualizzino i versi degli animali in essi contenuti, restringendoli ai soli uccelli nel caso di birdsounds. 
    Eventuali eccezioni di tipo UnknownSoundError devono essere gestite stampando 
    una stringa vuota per rappresentare l’assenza del verso.

*/

class UnknownSoundError extends Error { ; }

class Animal
{
    constructor() { ; }

    sound() { throw new UnknownSoundError("Unknown sound!")}
}

class Bird extends Animal
{
    constructor() { super(); }
    sound() { return "Cip Cip"; }
}

class Chicken extends Bird
{
    constructor () { super(); }
    sound() { return "Coccodé"; }
}

class Pig extends Animal
{
    constructor() { super(); }
    sound() { return "Oink Oink"; }
}

let b = new Bird();
let p = new Pig();
let c = new Chicken();

let animalArray = new Array(b, p, c)


function sounds(s)
{
    let result = ""
    for (let animal of s)
    {
        try
        {
            result += animal.sound() + " ";    
        }
        catch(error)
        {
            if (error instanceof UnknownSoundError)
            {
                result = "";
            }
        }
    }
    return result;
}

function birdsounds(s)
{

    let result = ""
    for (let animal of s)
    {
        if (animal instanceof Bird)
        {
            result += animal.sound() + " ";
        }
        else
        {
            return result;
        }
    } 
    return result;
}


console.log(sounds(animalArray))
console.log(birdsounds(animalArray))
