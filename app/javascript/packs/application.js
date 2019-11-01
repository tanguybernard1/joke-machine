// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()

import { colors } from './backgroundColors'

// Random background color
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomBackgroundColor = () => {
    const jokeContainer = document.querySelector('.joke-container')
    const selectedColorCouple = colors[Math.floor(Math.random() * colors.length)]
    jokeContainer.style.backgroundColor = selectedColorCouple[0];

    const jokeTexts = document.querySelectorAll('.joke')
    jokeTexts.forEach(text => {
      text.style.color = selectedColorCouple[1];
    })
}
randomBackgroundColor()

const refreshJoke = () => {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const joke = JSON.parse(httpRequest.responseText)
        document.querySelector('.joke-body').innerHTML = joke.body
        document.querySelector('.joke-answer').innerHTML = joke.answer
      } else {
        console.log('Il y a eu un problème avec la requête.')
      }
    }
  }
  catch(e) {
    console.log("Une exception s’est produite : " + e.description);
  }
}

const httpRequest = new XMLHttpRequest();

function getNewJoke() {
  if (!httpRequest) {
    alert('Abandon :( Impossible de créer une instance de XMLHTTP')
    return false
  }
  httpRequest.onreadystatechange = refreshJoke
  httpRequest.open('GET', '/refresh')
  httpRequest.send()
}

const jokeContainer = document.querySelector('.joke-container')
console.log(jokeContainer)
jokeContainer.addEventListener('click', () => {
  randomBackgroundColor()
  getNewJoke()
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
