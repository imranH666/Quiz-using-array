const nextBtn = document.querySelector(".nextBtn")
const scoreElement = document.querySelector(".score")

const questions = [
    {
        question: "What is the capital's name of Bangladesh?",
        choice: ['Khulna', 'Dhaka', 'Chottogram', 'Shylet'],
        currectAnswer: 'Dhaka'
    },
    {
        question: "When freed Bangladesh?",
        choice: [1971, 1991, 1952, 1969],
        currectAnswer: 1971
    },
    {
        question: "Who is presendet of USA?",
        choice: ['Nelson Mendela', 'Bladimir Putin', 'Bara Ovama', 'Joe Biden'],
        currectAnswer: 'Joe Biden'
    },
    {
        question: "Who have created Computer at first?",
        choice: ['Chirls Babage', 'Adween aldren', 'Micel Colins', 'Maxwell'],
        currectAnswer: 'Chirls Babage'
    },
    {
        question: "Where is located Anterctica continent?",
        choice: ['In east', 'In west', 'In north', 'In south'],
        currectAnswer: 'In south'
    }
]

let currentQuestionIndex = 0
let score = 0

function displayQuestion() {
    const questionElement = document.querySelector(".question")
    const choicesElement = document.querySelector(".choices")
    
    if(currentQuestionIndex < questions.length){
        const currentQuestion = questions[currentQuestionIndex]
        questionElement.textContent = currentQuestion.question
        choicesElement.innerHTML = ''
        
        currentQuestion.choice.map((choice, index) => {
            const li = document.createElement('li')
            li.textContent = choice
            li.className = 'choice'
            li.onclick = () => checkAnswer(index, li)
            li.style.color = 'black'
            choicesElement.appendChild(li)
        })
    }else {
        questionElement.textContent = 'Quiz Completed'
        choicesElement.textContent = ''
    }
}

function checkAnswer(index, li) {
    const currentQuestion = questions[currentQuestionIndex]
    if(currentQuestion.choice[index] === currentQuestion.currectAnswer){
        score++
        scoreElement.textContent = score
    }
    currentQuestionIndex++
    displayQuestion()
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++
    displayQuestion()
})

displayQuestion()

