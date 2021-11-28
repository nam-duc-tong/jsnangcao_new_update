const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarfull = document.querySelector('#progressBarfull');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
    {
        question: 'Who is She ?',
        choice1: 'Hara',
        choice2: 'Mickey',
        choice3: 'Tom',
        choice4: 'Teery',
        answer: 1,
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 1,
    },
    {
        question: 'What percent of American adults believe that chocolate milk comes from brown cows?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3,
    },
    {
        question: 'Approximately what percent of US power outages are caused by squirrels',
        choice1: '10%-20%',
        choice2: '25%-30%',
        choice3: '35%-40%',
        choice4: '50%-60%',
        answer: 1,
    }
];
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = ()=>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
getNewQuestion=()=>{
    if(availableQuestions.length === 0||questionCounter>MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore',score);
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarfull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`;
    
    const questionsIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach(choice=>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice'+number];
    });
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
}
choices.forEach(choice=>{
    choice.addEventListener('click',e =>{
        if(!acceptingAnswers) return
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if(classToApply === 'correct')
        {
            incrementScore(SCORE_POINTS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000);
    })
})
incrementScore = num =>{
    score += num;
    scoreText.innerText = score;
}
startGame();