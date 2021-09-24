var readlineSync = require('readline-sync');

var userName = readlineSync.question('What\'s your name? \n');

console.log('\nWelcome ' + userName + '.'+ '\n' +'Can you answer these 5 questions about your favourite Netflix show "Money Heist"?\n');

var score = 0;

function play(question,options,answer){
  var optionsIndex = readlineSync.keyInSelect(options,question);
  if(options[optionsIndex].toUpperCase() == answer.toUpperCase()){
    console.log('You Are Correct!');
    score = score+1;
  }
  else{
    console.log('You Are Wrong!');
  }

  console.log('Your Current Score is: ' + score );
  console.log('---------------------------------------------------------');
}

function beatScore(personalscore){
  for(var j=0;j<individualScores.length;j++){
    if(personalscore>individualScores[j].score){
      console.log('\nHurray!!! You have beaten the ' + individualScores[j].userName + ' Score.' + '\n' + 'Send me the Screenshot so that I will update your name in the Score Board.');
      break;
    }
  }
}

var questions = [{
question:'How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain? ',
options:['8','9','10','11'],
answer: '8'
},{
question:'The Professor’s first name is eventually revealed. What is it? ',
options:['Andrés','Aníbal','Sergio','Racquel'],
answer: 'Sergio'
},{
question:'Before giving up on society and turning to a life of crime, what was Moscow’s occupation? ',
options:['Hacker','Soldier','Miner','Clerk'],
answer: 'Miner'
},{
question:'The show is actually called La Casa de Papel, which literally translates to what? ',
options:['The Paper House','The Outcasts','The House of Outcasts','The House'],
answer: 'The Paper House'
},{
question:'In which country does Raquel track the Professor after the first heist? ',
options:['Philippines','Thailand','India','China'],
answer: 'Philippines'
}];

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].options,questions[i].answer);
}

var individualScores = [{
  userName:'Kiran',
  score:5
},
{
  userName:'Surya',
  score:4
}
];

console.log('Yahoo! Your Total Score is: ' + score + '\n');

console.log('Check out the High Scores:');

for(var i =0;i<individualScores.length;i++){
  console.log(individualScores[i].userName + ':' + individualScores[i].score)
}

beatScore(score);