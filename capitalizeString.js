let myString = "i can't wait for summer.";

let splitString = myString.split(' ')

console.log(splitString);

let joinedString = splitString.join('-');

console.log(joinedString);

for(let i = 0; i < splitString.length; i++) {

    let splitWord = splitString[i].split('');
    console.log(splitWord);
    splitWord[0] = splitWord[0].toUpperCase();
    let capitalizedWord = splitWord.join('');
    splitString[i] = capitalizedWord
    
}

console.log(splitString.join(' '));