const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
// const closeButton = document.querySelector('.popup-close')

button.addEventListener('click', () => {
     popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper','popup-link']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement) //itera pelo array e cada elemento é comparando com o item clickado

    if(shouldClosePopup){
        popup.style.display = 'none'
    }

})


// closeButton.addEventListener('click', () => {
//     popup.style.display = 'none'
// })

//Para esse caso qualquer click acaba fechando o popup
// popup.addEventListener('click', () => {
//     popup.style.display = 'none'
// })