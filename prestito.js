/*
    Una biblioteca ha una collezione di libri con titolo, autore e numero di copie disponibili.
    Un libro è rappresentato mediante un oggetto avente 3 proprietà: titolo, autore, copie. La biblioteca viene rappresent    ata da un array di libri.



    Si scriva una funzione prestito(biblioteca, s), con biblioteca un array di libri, e s una stringa che rappresenta il t      itolo di un libro. Se in biblioteca è presente un libro avente titolo s, quel libro viene dato in prestito: il numer    o di copie di quel libro in biblioteca viene decrementato, e la funzione restituisce true. 



    Se il libro non è disponibile (o non esiste in biblioteca, o non ci sono copie disponibili), la funzione restituisce false, e biblioteca non viene modificato.



Esempi:

biblioteca = [{titolo:'Pride and Prejudice',autore:'Jane Austen', copie:10}, 
    {titolo: 'Eloquent Javascript',autore:'Marijn Haverbeke',copie:0},
    {titolo: 'The lord of the rings',autore:'J. R. R. Tolkien.',copie:6}]

prestito(biblioteca,"The lord of the rings") restituisce true e biblioteca contiene

[{titolo:'Pride and Prejudice',autore:'Jane Austin', copie:10},{titolo: 'Eloquent Javascript',autore:'Marijn Haverbeke',copie:0},{titolo: 'The lord of the rings',autore:'J. R. R. Tolkien.',copie:5}]



biblioteca = [
    {titolo:'Pride and Prejudice',autore:'Jane Austen', copie:10}, 
    {titolo: 'Eloquent Javascript',autore:'Marijn Haverbeke',copie:0},
    {titolo: 'The lord of the rings',autore:'J. R. R. Tolkien.',coppie:6}]

    prestito(biblioteca,"Sense and Sensibility") restituisce false e biblioteca non viene modificato.



biblioteca = [{titolo:'Pride and Prejudice',autore:'Jane Austen', copie:10},
    {titolo: 'Eloquent Javascript',autore:'Marijn Haverbeke',copie:0},{titolo:
        'The lord of the rings',autore:'J. R. R. Tolkien.',copie:6}]

prestito(biblioteca,'Eloquent Javascript') restituisce false e biblioteca non viene modificato.
*/


function prestito(biblioteca, s)    
{
    let checkBook = false;

    for(let b of biblioteca)
    {
        if(s == b.titolo && b.copie > 0)
        {
            checkBook = true;
            b.copie--;
        }
    }
    return checkBook;
}

biblioteca = [{titolo:'Pride and Prejudice',autore:'Jane Austen', copie:10}, {titolo: 'Eloquent Javascript',autore:'Marijn Haverbeke',copie:0},{titolo: 'The lord of the rings',autore:'J. R. R. Tolkien.',copie:6}]



console.log(prestito(biblioteca, 'The lord of the rings'));
console.log(biblioteca);
