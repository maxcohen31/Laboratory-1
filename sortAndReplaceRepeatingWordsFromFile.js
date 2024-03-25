const fs = require("fs");

function words(f)
{
    let result = new Set();
    
    let content = fs.readFileSync(f).toString();
    // Replace special characters
    content = content.replace(/[^a-z ]/gi,"")
    
    let wordList = content.toLowerCase().split(" ");

    for (let word of wordList)
    {
        if (word != "") 
        {
            result.add(word);
        }
    }
    return result;
}


function sortedWords(f)
{
    let w = words(f);
    let result = [];

    for (let word of w)
    {
        result.push(word);
    }
    result.sort();
    return result;
}

console.log(words("text.txt"))
