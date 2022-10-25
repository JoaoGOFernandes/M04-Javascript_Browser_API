const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['A','A','B','A']

let score = 0

const getUserAnswers = () => {
    let userAnswers = []

    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })
        
    

    // const userAnswers = [
    //     form.inputQuestion1.value,
    //     form.inputQuestion2.value,
    //     form.inputQuestion3.value,
    //     form.inputQuestion4.value
    // ]
    return userAnswers
}

const calculateUserScore = (userAnswers) => {
    console.log(userAnswers);

    userAnswers.forEach((userAnswer, index) => {
        
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]
        if(isUserAnswerCorrect){
            score += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const animatedFinalScore = () => {
    let counter = 0
    const timer = setInterval(()=>{
        if (counter === score) {
            clearInterval(timer)
        }
        finalScoreContainer.querySelector('span').textContent = `${counter++}%` 
    }, 10)
}

form.addEventListener('submit', event => {
    event.preventDefault()
    
    const userAnswers = getUserAnswers()

    calculateUserScore(userAnswers)
    showFinalScore()
    animatedFinalScore()
})