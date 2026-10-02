const questions = [
    {
        question: "Pergunta1",
        answers: [
            { id: 1, text: "Resposta 1" },
            { id: 2, text: "Resposta 2" },
            { id: 3, text: "Resposta 3" },
            { id: 4, text: "Resposta 4" },
        ]
    },
    {
        question: "Pergunta2",
        answers: [
            { id: 1, text: "Resposta 1" },
            { id: 2, text: "Resposta 2" },
            { id: 3, text: "Resposta 3" },
            { id: 4, text: "Resposta 4" },
        ]
    },
    {
        question: "Pergunta3",
        answers: [
            { id: 1, text: "Resposta 1" },
            { id: 2, text: "Resposta 2" },
            { id: 3, text: "Resposta 3" },
            { id: 4, text: "Resposta 4" },
        ]
    },
    {
        question: "Pergunta4",
        answers: [
            { id: 1, text: "Resposta 1" },
            { id: 2, text: "Resposta 2" },
            { id: 3, text: "Resposta 3" },
            { id: 4, text: "Resposta 4" },
        ]
    },
    {
        question: "Pergunta5",
        answers: [
            { id: 1, text: "Resposta 1" },
            { id: 2, text: "Resposta 2" },
            { id: 3, text: "Resposta 3" },
            { id: 4, text: "Resposta 4" },
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id; 
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button);
    });
}

function selectAnswer(event){
    answers = questions[currentQuestionIndex].answers;
    const selectedBtn = event.target;

    Array.from(answerButtons.children).forEach(btn => {
        btn.classList.remove("selected");
    });
    selectedBtn.classList.add("selected");

    nextButton.style.display = "block";
}

function end(){
    resetState();
    questionElement.innerHTML = 'Obrigada por fazer o quiz!';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        end();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();