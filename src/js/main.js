"use strict";

const moment = require("moment");

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below



//Create item in local storage

const dateS = moment().format('YYYY/MM/DD');

let glasses = 0;
let storedGlasses = localStorage.getItem(dateS);

const count = document.querySelector('.glass__count--js');

if (localStorage.getItem(dateS) == null) {
  localStorage.setItem(dateS, glasses);
} else {
  glasses = parseInt(storedGlasses);
  count.innerHTML = glasses
}

//get the items from HTML
const addG = document.querySelector('.buttons__add--js');
const sub = document.querySelector('.buttons__sub--js');
const msg = document.getElementById('msg');


addG.addEventListener ('click', () => {
  glasses = parseInt(storedGlasses);

  if (glasses < 20) {
    glasses++;
    localStorage.setItem(dateS, glasses);
    count.innerHTML = glasses;
  } else {
    msg.classList.add ('message--js');
}
});

// close the message if displayed
const msgOK = document.querySelector('.message__button--js');

console.log (msgOK);

msgOK.addEventListener ('click', () => {
  msg.classList.remove ('message--js');
});


