const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultSpan = document.getElementById('result');

/**
 * Event listener for the check button click.
 * Calls the checkPalindrome function with the user's input value.
 * Clears the user input field.
 */
checkButton.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
});

/** 
* Is the main function, get's the user's input
* and checks if the word is blank, if is not 
* checks if it is a palindrome and shows a 
* result.
* 
* @param {String} input - The user's input to be checked.
* @returns {void}
*/
const checkPalindrome = input => {
    const firstInput = input;

    if(!checkBlankInput(input)){
        alert('Please enter a word');
        return;
    }

    resultSpan.replaceChildren();
    const fixedWord = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMessage = checkWord(fixedWord, firstInput);
    showResult(resultMessage);
}

/**
* Uses the result message to build and append the
* result elements to show the result.
* 
* @param {string} resultMessage - The result message to be shown.
* @returns {void}
*/
const showResult = (resultMessage) => {
    const resultP = document.createElement('p');
    resultP.className = 'result-text';
    resultP.innerHTML = resultMessage
    resultSpan.appendChild(resultP);
    resultSpan.classList.remove('hidden');
}

/** 
* It receives the fixed word and the original 
* word and returns a text.
*
* The text uses a ternary operator to check if the word
* is a palindrome and completes it by assigning 
* 'is' or 'is not' depending on the condition.
*
* @param {string} fixedWord - The fixed word to be checked.
* @param {string} originalWord - The original user input.
* @returns {string} - The result message.
*/
const checkWord = (fixedWord, firstInput) => {
    return `
        <strong>${firstInput}</strong> ${
            fixedWord === [...fixedWord].reverse().join('') ? 'is' : 'is not'
        } a palindrome.
    `;
}

/**
* It receives a text and returns a value
* depending if the text is blank or not.
* 
* @param {string} input - The input to be checked.
* @param {boolean=} - True if the text is blank.
*/
const checkBlankInput = input => {
    return input === '' ? false : true;
}