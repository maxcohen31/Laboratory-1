/*
  
    Si scriva una funzione seleziona che prenda in input un array di libri i cui elementi sono oggetti
    con le seguinti chiavi: tipo, titolo, autore,anno.
    La funzione deve ritornare un nuovo array contenente dei(nuovi) oggetti corrispondenti ai libri
    di tipo "romanzo", SENZA però includere la chiave tipo

    La funzione non deve alterare l'array originale né il suo contenuto.

*/


function seleziona(libreria)
{
    let books = [];
    
    for(let book of libreria)
    {
        if(book.tipo === 'romanzo')
        {
            let newBook = {};
            newBook.titolo = book.titolo;
            newBook.autore = book.autore;
            newBook.anno = book.anno;
            books.push(newBook);
        }
    }
    return books;

}


let lib = [
    {tipo: 'romanzo', titolo: 'Il nome della rosa', autore: 'Umberto Eco', anno: 1980},
    {tipo: 'romanzo', titolo: 'Il sentiero dei nidi di ragno', autore: 'Italo Calvino', anno: 1947},
    {tipo: 'saggio', titolo: 'Trattato di semiotica generale', autore: 'Umberto Eco', anno: 1975},
    {tipo: 'graphic novel', titolo: 'Persepolis', autore: 'Marjane Satrapi', anno: 1947},
]

console.log(seleziona(lib));
