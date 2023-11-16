function printHello()
{
    return "<p>This is a test</p>";
}

function wordFunction(word)
{
    console.log(word);
    //count vowels:
    let vowelCount = 0;
    for(let i = 0; i < word.length; i++)
    {
        if(word[i] == "a" || word[i] == "e" || word[i] == "i" 
        || word[i] == "o" || word[i] == "u" || word[i] == "A" 
        || word[i] == "E" || word[i] == "I" 
        || word[i] == "O" || word[i] == "U")
        {
            vowelCount++;
        }
    }

    return("<p> Word function accessed. Vowels: " + vowelCount + "</p>");
}

function reverseWord(word)
{
    let reversedWord = "";
    for(let i = word.length-1; i >= 0; i--)
    {
        reversedWord = reversedWord + word[i];
    }
    return("<p>" + reversedWord + "</p>");
}
exports.printHello = printHello;
exports.wordFunction = wordFunction;
exports.reverseWord = reverseWord;