const keys = document.querySelectorAll('.key')
const keyboard = document.querySelector('.keyboard')
const word = document.querySelector('.word')
const chancesDisplay = document.querySelector('.chances')
const letters = document.querySelector('.letters')

let hiddenWords = ['bronco', 'cowboys', 'packers']
let hiddenWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)]
let wordArray = []
let guesses = []
let chances = 10

chancesDisplay.innerHTML = `Chances left ${chances}`

let hiddenArray = () => {
  for (let i = 0; i < hiddenWord.length; i++) {
    wordArray.push(hiddenWord[i])
    const letters = document.createElement('div')
    letters.classList.add('letters')
    letters.innerText = '_'
    word.appendChild(letters)
    console.log(wordArray)
  }
}

let letterSelect = () => {
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => {
      let letter = keys[i].innerHTML.toLowerCase()
      console.log(letter)
      // word.innerHTML = letter
      // hiddenArray()
      let guessed = guesses.includes(letter)
      let result = wordArray.includes(letter)
      console.log(guessed)
      console.log(result)
      if (guessed == true) {
        return
      } else if (result == true) {
        guesses.push(letter)
        // const newDiv = document.createElement('div')
        // newDiv.classList.add('letter')
        // newDiv.innerHTML = letter
        // word.appendChild(newDiv)
      } else {
        chances--
        chancesDisplay.innerHTML = `Chances left ${chances}`
        guesses.push(letter)
      }
      console.log(guesses)
    })
  }
}

letterSelect()
hiddenArray()
