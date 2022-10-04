let keys = document.querySelectorAll('.key')
let keyboard = document.querySelector('.keyboard')
let word = document.querySelector('.word')
let hiddenWord = 'bronco'
let wordArray = []

let turns = 10

let hiddenArray = () => {
  for (let i = 0; i < hiddenWord.length; i++) {
    wordArray.push(hiddenWord[i])
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
        const newDiv = document.createElement('div')
        newDiv.classList.add('letter')
        newDiv.innerHTML = letter
        word.appendChild(newDiv)
      }
    })
  }
}

letterSelect()
hiddenArray()
