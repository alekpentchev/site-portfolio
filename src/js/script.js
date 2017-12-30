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

/*
//Skills tooltips
*/

//JS tooltip
tippy(document.querySelector('.js'), {
  html: document.querySelector('#js-tooltip'),
  trigger: 'click'
})

//Vue Tooltip
tippy(document.querySelector('.vue'), {
  html: document.querySelector('#vue-tooltip'),
  trigger: 'click'
})

//Angular tooltip
tippy(document.querySelector('.angular'), {
  html: document.querySelector('#angular-tooltip'),
  trigger: 'click'
})

//Workflow tooltip
tippy(document.querySelector('.workflow'), {
  html: document.querySelector('#workflow-tooltip'),
  trigger: 'click'
})

//HTML tooltip
tippy(document.querySelector('.html'), {
  html: document.querySelector('#html-tooltip'),
  trigger: 'click'
})

//CSS tooltip
tippy(document.querySelector('.css'), {
  html: document.querySelector('#css-tooltip'),
  trigger: 'click'
})

//Soft skills tooltip
tippy(document.querySelector('.soft'), {
  html: document.querySelector('#soft-tooltip'),
  trigger: 'click'
})

//RegExp tooltip
tippy(document.querySelector('.regex'), {
  html: document.querySelector('#regex-tooltip'),
  trigger: 'click'
})

//sass tooltip
tippy(document.querySelector('.sass'), {
  html: document.querySelector('#sass-tooltip'),
  trigger: 'click'
})



/*
Contact form
*/

//Send button - contact form
document.querySelector('.submit').addEventListener('click' , () => {
  let message = document.getElementById("message");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  
  if( name.checkValidity() && email.checkValidity()) {
    let link = "mailto:innfea@gmail.com"
      + "?subject=" + escape("Contact form message")
      + "&body=" + escape(`Email: ${email.value}
      Name: ${name.value}
      Message: ${message.value}`);
    window.location.href = link;
    //window.open(link )
  }
});

/*
Footer
*/
let currentYear = (new Date()).getFullYear();
document.querySelector('.current-year').innerHTML = currentYear;
