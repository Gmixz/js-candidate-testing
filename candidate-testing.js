const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
// let questionsXX = 'True or false: 5 kilometer == 5000 meters?';
// let correctAnswers = 'true';
// // let candidateAnswers= '';
// let questions = '(5 + 3)/2 * 10 = ?';
// let correctAnswers = '40';
// let candidateAnswers= '';
// let questions = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
// let correctAnswers = 'Trajectory';
// let candidateAnswers= '';
// let questions = 'What is the minimum crew size for the ISS?';
// let correctAnswers = '3';
// let candidateAnswers= ''; 
 const questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', 'Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];

  const correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];

  let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('\n\n Candidate Name: ');
}

function askQuestions() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
  questions.forEach(function(question) {

    let inputFromUser = input.question(`\n' ${question}'\n\n`);
    
    candidateAnswers.push(inputFromUser);
    
  });
}
  
/* function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //Correct Answer: {}, Your answer: {}

  candidateAnswers.forEach(function(answer, index) {
    console.log(`\n Your answer: ${answer}, Correct answer: ${correctAnswers[index]}`);
  });

}; */
function gradeQuiz(candidateAnswers) {

  let score = 0;
  correctAnswers.forEach(function(correctAnswer) {


    if (candidateAnswers.some(function(element) { return element.toUpperCase() === correctAnswer.toUpperCase() })) 
    {
      score++;
    }// if answer is not correct dont increase the score
  });
  const finalGrade = (score/questions.length) * 100;

  console.log(`\n Your grade is: ${finalGrade}%`);

  if(finalGrade < 80)
  {
    console.log('\n Your Grade was lower than 80% you FAILED');
  }
  else 
  {
    console.log('\n Your Grade was equal or greater than 80% you PASSED');
  }
  
  return finalGrade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
 console.log(`\n Hello, ${candidateName} \n`);
  
  askQuestions();
  
  gradeQuiz(this.candidateAnswers);
};
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