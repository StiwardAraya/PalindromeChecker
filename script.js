const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultSpan = document.getElementById('result');

/*
* checkPalindrome 
* 
* Is the main function, get's the user's input
* and checks if the word is blank, if is not 
* checks if it is a palindrome and shows a 
* result.
*/
const checkPalindrome = input => {
    const firstInput = input;

    if(checkBlankInput(input)){
        alert('Please enter a word');
        return;
    }

    resultSpan.replaceChildren();
    const fixedWord = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMessage = checkWord(fixedWord, firstInput);
    showResult(resultMessage);
}

/*
* showResult
*
* Uses the result message to build and append the
* result elements to show the result
*/
const showResult = (resultMessage) => {
    const resultP = document.createElement('p');
    resultP.className('result-text');
    resultP.innerHTML = resultMessage
    resultSpan.appendChild(resultP);
    resultSpan.classList.remove('hidden');
}

/*
* checkWord
* 
* It receives the fixed word and the original 
* word and returns a text.
*
* The text uses a ternary operator to check if the word
* is a palindrome and completes it by assigning 
* 'is' or 'is not' depending on the condition.
*/
const checkWord = (fixedWord, firstInput) => {
    return `
        <strong>${firstInput}</strong> ${
            fixedWord === [...fixedWord].reverse().join('') ? 'is' : 'is not'
        } a palindrome.
    `;
}

/*
* checkBlankInput
*
* It receives a text and returns a value
* depending if the text is blank or not.
*/
const checkBlankInput = input => {
    return input === '' ? false : true;
}