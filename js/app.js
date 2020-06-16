'use strict';
console.log('app.js is connected.');


var userName = prompt('what is your name?');
console.log(userName);

function greetUser(){
  if (userName === String){
    document.getElementById('greeting').innerHTML = ('Welcome ' + userName + '!');
  } else {
    document.getElementById('greeting').innerHTML = ('Welcome');
  }
}
greetUser();

