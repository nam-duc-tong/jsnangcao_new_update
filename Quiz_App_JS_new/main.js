const quizData = [
    { 
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the best programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'Who is the President of US ?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for ?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    },
    {
        question: 'What year was Javascript launched?',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'none of the above',
        correct: 'd'
    }
];


const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

const currentQuestion = 0;
const score = 0;

loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    const answerEls = document.querySelectorAll("anwser");
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });
    return answer;
}
submitBtn.addEventListener("click",()=>{
    const answer = getSelected();
    console.log(answer);
    if(answer){
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        }
        else{
            //to do: Show results
            alert("You finished! Get Yourself an Orange Lemonade");
        }
    }
});
