const keys = document.querySelectorAll('.key')
const keyboard = document.querySelector('.keyboard')
const word = document.querySelector('.word')
const chancesDisplay = document.querySelector('.chances')
const restart = document.querySelector('.restart')
const message = document.querySelector('.message')

let wordArray = []
let guesses = []
let chances = 10
let winner = false
let wins = 0
let losses = 0

chancesDisplay.innerHTML = `Yards left ${chances}`

let hiddenArray = () => {
  let hiddenWords = [
    'broncos',
    'cowboys',
    'packers',
    'chiefs',
    'raiders',
    'steelers',
    'vikings',
    'rams',
    'bills',
    'patriots',
    'giants',
    'cardinals',
    'seahawks',
    'bears',
    'buccaneers',
    'eagles',
    'panthers',
    'dolphins',
    'browns',
    'bengals',
    'ravens',
    'saints',
    'jets',
    'chargers',
    'titans',
    'colts',
    'lions',
    'jaguars',
    'texans',
    'commanders'
  ]
  let hiddenWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)]
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
        colorKeys()
      } else if (winner === true) {
        return
      } else if (chances === 0 && winner === false) {
        losses++
        message.innerText = 'Offense got a First Down! You lose!'
        restart.style.opacity = 1
        score()
        return
      } else {
        chances--
        chancesDisplay.innerText = `Yards left ${chances}`
        guesses.push(letter)
        colorKeys()
      }
    })
  }
}

let colorKeys = () => {
  guesses.forEach((item) => {
    document.querySelector(`#${item}`).style.background = 'gray'
  })
}

let clearKeys = () => {
  guesses.forEach((item) => {
    document.querySelector(`#${item}`).style.background = 'initial'
  })
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
      wins++
      message.innerText = 'You stopped the offense! You Win!'
      restart.style.opacity = 1
      score()
    }
  })
}

const score = () => {
  const winBoard = document.querySelector('.wins')
  const lossBoard = document.querySelector('.losses')
  winBoard.innerText = wins
  lossBoard.innerText = losses
}

const restartGame = () => {
  winner = false
  chances = 10
  chancesDisplay.innerHTML = `Yards left ${chances}`
  restart.style.opacity = 0
  message.innerHTML = ''
  clearKeys()
  guesses = []
  wordArray = []
  word.innerHTML = ''
  hiddenArray()
}

letterSelect()
hiddenArray()

restart.addEventListener('click', restartGame)
