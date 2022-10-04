const keys = document.querySelectorAll('.key')
const keyboard = document.querySelector('.keyboard')
const word = document.querySelector('.word')
const chancesDisplay = document.querySelector('.chances')
const letters = document.querySelector('.letters')

let hiddenWords = ['bronco', 'cowboys', 'packers']
let hiddenWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)]
let wordArray = []
let chances = 10

let hiddenArray = () => {
  for (let i = 0; i < hiddenWord.length; i++) {
    wordArray.push(hiddenWord[i])
    const letters = document.createElement('div')
    letters.classList.add('letters')
    letters.innerText = wordArray[i]
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
      let result = wordArray.includes(letter)
      console.log(result)
      if (result == true) {
        // const newDiv = document.createElement('div')
        // newDiv.classList.add('letter')
        // newDiv.innerHTML = letter
        // word.appendChild(newDiv)
      } else {
        chances--
        chancesDisplay.innerHTML = `Chances left ${chances}`
      }
    })
  }
}

letterSelect()
hiddenArray()
