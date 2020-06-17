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

//Start guessing game
function guessingGame(){
  if (typeof(userName) === 'string'){
    alert('Answers to questions are Yes or No. Good luck ' + userName + '!');
  } else {
    alert('Answers to questions are Yes or No. Good luck!');}
  question1();
  question2();
  question3();
  question4();
  question5();
  gradeQuiz();
}






//Question1 Was I born in IA?
function question1(){
  var input1 = prompt('Was I born in IA?');
  answer1 = input1.toLowerCase();
  console.log(answer1);

  if(answer1 === 'no' || answer1 === 'n') {
    alert('Correct, I was born out in CA!');
    // quizScore += 1;
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
    // quizScore += 1;
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
    // quizScore += 1;
  }else{
    alert('Bruhhh.');
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
    // quizScore += 1;
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
    // quizScore += 1;
  }else{
    alert('Well I didn\'t just eat it all.');
  }
  return answer5;
}



//Grade Quiz
var answerKey = [['no','n'],['no','n'],['yes','y'],['yes','y'],['yes','y']];
// console.log(answerKey);
function gradeQuiz(){
  if(answer5 === answerKey[4]) {
    quizScore += 1;
  }else{console.log('Answer to question # 5 was incorrect');
  }

  if(answer4 === answerKey[3]) {
    quizScore += 1;
  }else{console.log('Answer to question # 4 was incorrect');
  }

  if(allenIverson === answerKey[2]) {
    quizScore += 1;
  }else{console.log('Answer to question # 3 was incorrect');
  }

  if(answer2 === answerKey[1]) {
    quizScore +=1;
  }else{console.log('Answer to question # 2 was incorrect');
  }

  if(answer1 === answerKey[0]) {
    quizScore += 1;
  }else{console.log('Answer to question # 1 was incorrect');
  }
  document.getElementById('quizScore').innerHTML = quizScore;

  return quizScore;

}


