const keys = document.querySelectorAll('.key')
const keyboard = document.querySelector('.keyboard')
const word = document.querySelector('.word')
const chancesDisplay = document.querySelector('.chances')
const letters = document.querySelector('.letters')

let hiddenWords = ['bronco', 'cowboys', 'packers']
let hiddenWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)]
let wordArray = []
let guesses = []
let rightWord = []
let chances = 10
let letter

chancesDisplay.innerHTML = `Chances left ${chances}`

let hiddenArray = () => {
  for (let i = 0; i < hiddenWord.length; i++) {
    wordArray.push(hiddenWord[i])
    const letters = document.createElement('div')
    letters.classList.add('letters')
    letters.innerText = '_'
    word.appendChild(letters)
    //console.log(wordArray)
  }
}

let letterSelect = () => {
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => {
      let letter = keys[i].innerHTML.toLowerCase()
      let key = keys[i]
      let guessed = guesses.includes(letter)
      let result = wordArray.includes(letter)
      if (guessed == true) {
        return
      } else if (result == true) {
        renderLetter(letter, key)
        guesses.push(letter)
      } else {
        chances--
        chancesDisplay.innerHTML = `Chances left ${chances}`
        guesses.push(letter)
      }
    })
  }
}

let renderLetter = (letter, key) => {
  //console.log(letter)
  console.log(wordArray)
  //console.log(key.id)
  if (letter == key.id) {
    console.log(letter)
  }
}

letterSelect()
hiddenArray()
