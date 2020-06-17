'use strict';



var userName = prompt('What is your name?');


function greetUser(){
  if (typeof(userName) === 'string'){
    document.getElementById('greeting').innerHTML = ('Welcome ' + userName + '!');
  } else {
    document.getElementById('greeting').innerHTML = ('Welcome');
  }
}
greetUser();



//Start guessing game
function guessingGame(){
  alert('Answers to questions are Yes or No. Good luck ' + userName + '!');
  question1();
  question2();
  question3();
  question4();
  question5();
}



var gameButton = document.getElementById('gameButton');
gameButton.addEventListener('click',guessingGame);


//Question1 Was I born in IA?
function question1(){
  var input1 = prompt('Was I born in IA?');
  var answer1 = input1.toLowerCase();
  console.log(answer1);

  if(answer1 === 'no' || answer1 === 'n') {
    alert('Correct, I was born out in CA!');
  }else{
    alert('Were you even paying attention fam?');
  }
}

//Question2 Do I hate drawing?
function question2(){
  var input2 = prompt('Do I hate to draw?');
  var answer2 = input2.toLowerCase();
  console.log(answer2);

  if(answer2 === 'no' || answer2 === 'n') {
    alert('Correct, I find drawing to be a good way to take my mind off things.');
  }else{
    alert('Nope.');
  }
}

//Question3 Did I drop out of high school?
function question3(){
  var input3 = prompt('Did I drop out of high school?');
  var allenIverson = input3.toLowerCase();
  console.log(allenIverson);

  if(allenIverson === 'yes' || allenIverson === 'y') {
    alert('Correct, I\'m an utter failure!');
  }else{
    alert('Glad you think highly of me but unfortunately that is incorrect.');
  }
}


//Question4 Do I know how to put together a Honda Engine?
function question4(){
  var input4 = prompt('Do I know how to put together a Honda engine?');
  var answer4 = input4.toLowerCase();
  console.log(answer4);

  if(answer4 === 'yes' || answer4 === 'y') {
    alert('You bet I do!');
  }else{
    alert('Stop slandering my name.');
  }
}


//Question5 Did I make Cap'n Crunch?
function question5(){
  var input5 = prompt('Did I Make Cap\'n Crunch?');
  var answer5 = input5.toLowerCase();
  console.log(answer5);

  if(answer5 === 'yes' || answer5 === 'y') {
    alert('Correct! The amount of cereal we made in an hour was absurd!');
  }else{
    alert('Well I didn\'t just eat it all.');
  }
}

