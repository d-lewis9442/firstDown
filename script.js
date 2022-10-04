const keys = document.querySelectorAll('.key')
const keyboard = document.querySelector('.keyboard')
const word = document.querySelector('.word')
const chancesDisplay = document.querySelector('.chances')

let hiddenWord = 'broncos'
// let hiddenWords = ['broncos', 'cowboys', 'packers']
// let hiddenWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)]
let wordArray = []
let guesses = []
let chances = 10
let winner = false

chancesDisplay.innerHTML = `Chances left ${chances}`

let hiddenArray = () => {
  for (let i = 0; i < hiddenWord.length; i++) {
    wordArray.push(hiddenWord[i])
    const letters = document.createElement('div')
    letters.classList.add('letters')
    letters.innerText = '_'
    word.appendChild(letters)
  }
}

let letterSelect = () => {
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => {
      let letter = keys[i].innerHTML.toLowerCase()
      let guessed = guesses.includes(letter)
      let result = wordArray.includes(letter)
      const message = document.querySelector('.message')
      if (guessed === true) {
        return
      } else if (result === true) {
        renderLetter(letter)
        guesses.push(letter)
        checkWin()
      } else if (winner === true) {
        return
      } else if (chances === 0 && winner === false) {
        message.innerText = 'You lose!'
        return
      } else {
        chances--
        chancesDisplay.innerHTML = `Chances left ${chances}`
        guesses.push(letter)
      }
    })
  }
}

let renderLetter = (letter) => {
  const letterDivs = document.querySelectorAll('.letters')
  wordArray.forEach((item, index) => {
    if (item === letter) {
      letterDivs[index].innerText = letter
    }
  })
}

let checkWin = () => {
  const message = document.querySelector('.message')
  const letters = document.querySelectorAll('.letters')
  let winArray = []
  letters.forEach((item) => {
    winArray.push(item.innerText)
    let winString = winArray.toString()
    let wordString = wordArray.toString()
    if (winString === wordString) {
      winner = true
      message.innerText = 'Winner!'
    }
  })
}

letterSelect()
hiddenArray()
