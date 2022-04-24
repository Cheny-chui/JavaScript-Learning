const quizData = [
    {
        questionName: "How old is Cheny?",
        a: '10',
        b: '17',
        c: '22',
        d: '55',
        correct: 'c',
    },
    {
        questionName: "What is the most used programming language in 2021?",
        a: 'C++',
        b: 'Java',
        c: 'C',
        d: 'python',
        correct: 'd',
    },
    {
        questionName: "Who is the President of US?",
        a: 'Cheny',
        b: 'Donald Trump',
        c: 'Ivan Saldno',
        d: 'Joe Biden',
        correct: 'd',
    },
    {
        questionName: "What does HTML stand for?",
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Nothing, just a name',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    },
    {
        questionName: "What year was JavaScript lanched?",
        a: '2020',
        b: '2010',
        c: '2000',
        d: 'none of the above',
        correct: 'd',
    }
]

let currentQuestion = 0
let score = 0

const questionName = document.getElementById("questionName")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitButton = document.getElementById("submitButton")

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion]
    questionName.innerHTML = currentQuizData.questionName
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d

    // deselect
    const answers = document.querySelectorAll("input[name='answer']")
    answers.forEach((answer) => {
        answer.checked = false
    })
    
}

function judge() {
    const answers = document.querySelectorAll("input[name='answer']")
    let flag = false;
    answers.forEach((answer) => {
        if(answer.checked){
            if(answer.value==quizData[currentQuestion].correct){
                flag = true
            }
        }
    })
    return flag
}

submitButton.addEventListener('click',()=>{
    console.log(judge())
    if((currentQuestion < quizData.length)&&judge()){
        score++;
        console.log(score)
    }
    ++currentQuestion
    if(currentQuestion < quizData.length){
        loadQuiz()
    }else{
        alert(`You get ${score} points!`)
        
        currentQuestion = 0;
        score = 0;
        loadQuiz()
    }
    
})