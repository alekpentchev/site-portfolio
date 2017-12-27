'use strict'
/* Rotating words function */
let wordList = ['impression','usability','experience', 'websites'];
const oneSecond = 1000;
const timeInterval = 3 * oneSecond;

function displayWord(wordIndex){
  let text = document.querySelector('.header__span');
  let word = wordList[wordIndex];
  text.textContent = word;
};

function rotateWord(index){ 
  setInterval(()=>{
    if(index === wordList.length){
      index=0
    }
    displayWord(index)
    index++
  },timeInterval)
};

window.addEventListener('DOMContentLoaded',rotateWord(0));

tippy(document.querySelector('.js'), {
  trigger: 'click'
})