/* 
Created with passion by Corné Adema / 0xcorne
GitHub: https://github.com/0xcorne
*/

// Grabbing DOM Elements
const inputEl = document.getElementById('answer')
const submitButton = document.getElementById('sub')
const shakeButton = document.getElementById('shake')

// Define empty array to store the random answer inputs
let arraySave = [];

// Adding EventListener to push the input to the array
submitButton.addEventListener('click', () => {
    if (inputEl.value === '') {
        alert("Please add a sentence in the input!")
    } else {
    arraySave.push(inputEl.value)
    console.log(arraySave)
    inputEl.value = ''
    }
})

// Adding EventListener to give a random item from the array
shakeButton.addEventListener('click', () => {
    let randomItem = arraySave[Math.floor(Math.random()*arraySave.length)];
    if (randomItem === undefined) {
        alert('Please insert some random sentences first!')
    } else {
        alert(`The Magic Eight Ball gave this sentence: ${randomItem} `);
    }
})
