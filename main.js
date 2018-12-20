'use strict'

const warning = document.querySelector('.anal-warning');
const easterEgg = document.querySelector('.anal-song')
const lookDown = document.querySelector('.anal-show')
warning.addEventListener('click', ()=>{
  easterEgg.classList.toggle('anal-hidden')
  warning.classList.toggle('anal-hidden')
  lookDown.classList.toggle('anal-hidden')
})