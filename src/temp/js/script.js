"use strict";function displayWord(e){var t=document.querySelector(".header__span"),o=wordList[e];t.textContent=o}function rotateWord(e){setInterval(function(){e===wordList.length&&(e=0),displayWord(e),e++},timeInterval)}var wordList=["impression","usability","experience","websites"],oneSecond=1e3,timeInterval=3*oneSecond;window.addEventListener("DOMContentLoaded",rotateWord(0)),tippy(document.querySelector(".js"),{html:document.querySelector("#js-tooltip"),trigger:"click"}),tippy(document.querySelector(".vue"),{html:document.querySelector("#vue-tooltip"),trigger:"click"}),tippy(document.querySelector(".angular"),{html:document.querySelector("#angular-tooltip"),trigger:"click"}),tippy(document.querySelector(".workflow"),{html:document.querySelector("#workflow-tooltip"),trigger:"click"}),tippy(document.querySelector(".html"),{html:document.querySelector("#html-tooltip"),trigger:"click"}),tippy(document.querySelector(".css"),{html:document.querySelector("#css-tooltip"),trigger:"click"}),tippy(document.querySelector(".soft"),{html:document.querySelector("#soft-tooltip"),trigger:"click"}),tippy(document.querySelector(".regex"),{html:document.querySelector("#regex-tooltip"),trigger:"click"}),tippy(document.querySelector(".sass"),{html:document.querySelector("#sass-tooltip"),trigger:"click"});