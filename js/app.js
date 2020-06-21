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
var gameButton = document.getElementById('gameButton');
gameButton.addEventListener('click',guessingGame);

var quizScore = 0;
var answer1;
var answer2;
var allenIverson;
var answer4;
var answer5;
var answer6;
var answer7;

//Start guessing game
function guessingGame(){
  quizScore = 0;
  if (typeof(userName) === 'string'){
    alert('Answers to questions are Yes or No. Good luck ' + userName + '!');
  } else {
    alert('Answers to questions are Yes or No. Good luck!');}
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
  gradeQuiz();
}






//Question1 Was I born in IA?
function question1(){
  var input1 = prompt('Was I born in IA?');
  answer1 = input1.toLowerCase();
  console.log(answer1);

  if(answer1 === 'no' || answer1 === 'n') {
    alert('Correct, I was born out in CA!');
  }else{
    alert('Were you even paying attention fam?');
  }
  return answer1;
}

//Question2 Do I hate drawing?
function question2(){
  var input2 = prompt('Do I hate to draw?');
  answer2 = input2.toLowerCase();
  console.log(answer2);

  if(answer2 === 'no' || answer2 === 'n') {
    alert('Correct, I find drawing to be a good way to take my mind off things.');
  }else{
    alert('Nope.');
  }
  return answer2;
}

//Question3 Did I drop out of high school?
function question3(){
  var input3 = prompt('Did I drop out of high school?');
  allenIverson = input3.toLowerCase();
  console.log(allenIverson);

  if(allenIverson === 'yes' || allenIverson === 'y') {
    alert('Correct, I\'m an utter failure!');
  }else{
    alert('Incorrect');
  }
  return allenIverson;
}


//Question4 Do I know how to put together a Honda Engine?
function question4(){
  var input4 = prompt('Do I know how to put together a Honda engine?');
  answer4 = input4.toLowerCase();
  console.log(answer4);

  if(answer4 === 'yes' || answer4 === 'y') {
    alert('You bet I do!');
  }else{
    alert('Stop slandering my name.');
  }
  return answer4;
}


//Question5 Did I make Cap'n Crunch?
function question5(){
  var input5 = prompt('Did I Make Cap\'n Crunch?');
  answer5 = input5.toLowerCase();
  console.log(answer5);

  if(answer5 === 'yes' || answer5 === 'y') {
    alert('Correct! The amount of cereal we made in an hour was absurd!');
  }else{
    alert('Well I didn\'t just eat it all.');
  }
  return answer5;
}

//Question 6
function question6(){
  var input6 = prompt('Im thinking of a number can you guess what it is? I\'ll give you 4 try\'s');
  console.log(input6);
  // eslint-disable-next-line eqeqeq
  if(input6 == 15){
    alert('Lucky guess');
    answer6 = input6;
    console.log(answer6);
    return answer6;
  }
  else{
    if (input6 > 15){
      input6 = alert('A little lower');
      loop6();
    }
    if(input6 < 15){
      input6 = alert('A little higher');
      loop6();
    }
  }
}


function loop6(){
  var i = 0;
  for( i = 0; i < 3; i++) {
    var input6 = prompt('Guess again');
    // eslint-disable-next-line eqeqeq
    if(input6 == 15){
      alert('Lucky guess');
      answer6 = input6;
      i = 3;
    }
    else{
      if (input6 > 15 && i < 2){
        input6 = alert('A little lower');
      }
      if(input6 < 15 && i < 2){
        input6 = alert('A little higher');
      }
      else{
        (!input6);
        input6 = 0;
        break;
      }
    }
  }
  return answer6;
}
//Question 7 Can you name any of my favorite musical artists?
var musicArtists = ['Jedi Mind Tricks','Big L','Slaughterhouse','CunnninLynguists','Dave East','Merkules','Jarren Benton','Chris Webby','Ice Cube','Wu-Tang'];
var lowerCaseArtists = [];
for (var y = 0; y < musicArtists.length; y++) {
  lowerCaseArtists.push(musicArtists[y].toLowerCase());
}
function question7(){
  var i = 0;
  while (i < 6){
    var input7 = prompt('Can you name any of my favorite musical artists? I\'ll give you 6 chances.');
    var lowerInput7 = input7.toLowerCase();
    for (var x = 0; x < lowerCaseArtists.length; x++){
      if (lowerInput7 === lowerCaseArtists[x]){
        alert('Correct!');
        i = 6;
        answer7 = 'yes';
      }
    }
    if (i !== 6){
      alert('Try again.');
    }
    i ++;
  }
  alert('Quiz completed.');
  return answer7;
}









//Grade Quiz
var answerKey = ['n','n','y','y','y',15,'yes'];
var answerKey1 = ['no','no','yes','yes','yes',15];
function gradeQuiz(){
  if(answer1 === answerKey[0] || answer1 === answerKey1[0]) {
    quizScore++;
  }else{
    console.log('Answer to question # 1 was incorrect');
  }

  if(answer2 === answerKey[1] || answer2 === answerKey1[1]) {
    quizScore++;
  }else{
    console.log('Answer to question # 2 was incorrect');
  }

  if(allenIverson === answerKey[2] || allenIverson === answerKey1[2]) {
    quizScore++;
  }else{
    console.log('Answer to question # 3 was incorrect');
  }

  if(answer4 === answerKey[3] || answer4 === answerKey1[3]) {
    quizScore++;
  }else{
    console.log('Answer to question # 4 was incorrect');
  }

  if(answer5 === answerKey[4] || answer5 === answerKey1[4]) {
    quizScore++;
  }else{
    console.log('Answer to question # 5 was incorrect');
  }

  // eslint-disable-next-line eqeqeq
  if(answer6 == answerKey[5]) {
    quizScore++;
  }else{
    console.log('Answer to question # 6 was incorrect');
  }

  if(answer7 === answerKey[6]) {
    quizScore++;
  }else{
    console.log('Answer to question # 7 was incorrect');
  }

  document.getElementById('quizScore').innerHTML = quizScore;

  return quizScore;
}
