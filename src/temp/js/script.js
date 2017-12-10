'use strict';

/* Rotating words function */
var wordList = ['impression', 'usability', 'experience', 'websites'];
var oneSecond = 1000;
var timeInterval = 3 * oneSecond;

function displayWord(wordIndex) {
  var text = document.querySelector('.header__span');
  var word = wordList[wordIndex];
  text.textContent = word;
};

function rotateWord(index) {

  setInterval(function () {

    if (index === wordList.length) {
      index = 0;
    }

    displayWord(index);
    index++;
  }, timeInterval);
};

//Unnecessary function which caused problems with rotating words in header section
/*
function funcRotate(){
  rotateWord(0)
};
*/

window.addEventListener('DOMContentLoaded', rotateWord(0));

//Other methods which would work in this case but the upper one is clearer and better

/*for ( i ; i<wordsLen ; i++) {
  (function(x){
    setTimeout(function(){ rotateWords.textContent=words[x];}, x *1000);
  })(i)
}
*/

// This function also works
/*let interval = setInterval(function() {
    rotateWords.textContent= words[i];
    i++;
    if (i>=wordsLen) {
      clearInterval;
      i=wordsLen-1
    }
}, 1000)
*/