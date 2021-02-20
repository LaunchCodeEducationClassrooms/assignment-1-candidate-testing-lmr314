const input = require('readline-sync');


let candidateName;
let question;
let correctAnswer = "Sally Ride";
let candidateAnswer= '';
let questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters. ',
  '(5 + 3)/2 * 10 = ? ',
  'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ',
  'What is the minimum crew size for the ISS? '
  ];
let correctAnswers = ['Sally Ride', 'True', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question("What is your name? ")
  console.log (`Hi, ${candidateName}!`)
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
   candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers){
  let successAnswers = 0 
  let grade = 0
  console.log(`\nCandidate Name: ${candidateName}`)
  for (let i = 0; i < questions.length; i++) { 
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
      successAnswers = successAnswers + 1 
    } 
    console.log(`${1 + i}) ${questions[i]} \nYour Answer: ${candidateAnswers[i]} \nCorrect Answer: ${correctAnswers[i]}\n`)
  }
  grade = successAnswers/5*100
  let passFail = 'FAILED';
  if (grade >= 80){
    passFail = 'PASSED'
  }
  console.log(`>>> Overall Grade: ${grade}% (${successAnswers} of 5 responses correct) <<<\n>>> Status: ${passFail} <<<`)
  return grade
};

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};