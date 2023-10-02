const quizData = [
{
question: "Select the appropriate HTML tag used for the largest heading?",
options: ["Heading", "h6", "float", "Head"],
answer: "B"
},
{
question: "What does the abbreviation HTML stand for?",
options: ["Hypertext markup language", "High text markup language", "Hyper text markdown language", "None of the above"],
answer: "A"
},
{
question: "What does CSS stand for?",
options: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
answer: "C"
},
{
question: "CSS padding property is used for?",
options: ["Border", "space", "Margin", "Background-color"],
answer: "B"
},
{
question: " Which HTML tag is used to define an internal style sheet?",
options: ["CSS", "style", "script", "text/style"],
answer: "B"
}
];


let currentQuestion = 0;
let score = 0;


const questionText = document.getElementById('question-text');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');
const submitButton = document.getElementById('submit-button');
const feedback = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-button');


function loadQuestion() {
const currentQuiz = quizData[currentQuestion];
questionText.textContent = currentQuiz.question;
optionA.textContent = currentQuiz.options[0];
optionB.textContent = currentQuiz.options[1];
optionC.textContent = currentQuiz.options[2];
optionD.textContent = currentQuiz.options[3];
feedback.textContent = "";
submitButton.disabled = false;
nextButton.style.display = "none";
}


function checkAnswer() {
const selectedOption = document.querySelector('input[name="answer"]:checked');
if (!selectedOption) {
feedback.textContent = "Please select an answer.";
return;
}

const answer = selectedOption.value;
if (answer === quizData[currentQuestion].answer) {
feedback.textContent = "Correct!";
score++;
scoreElement.textContent = score;
} else {
feedback.textContent = "Wrong!";
}

submitButton.disabled = true;
nextButton.style.display = "block";
}


function nextQuestion() {
currentQuestion++;
if (currentQuestion < quizData.length) {
loadQuestion();
} else {
questionText.textContent = "Quiz Complete!";
optionA.style.display = "none";
optionB.style.display = "none";
optionC.style.display = "none";
optionD.style.display = "none";
submitButton.style.display = "none";
feedback.textContent = `You scored ${score} out of ${quizData.length} questions.`;
scoreElement.textContent = score;
nextButton.style.display = "none";
}
}


submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);


loadQuestion();