  
const modal = document.querySelector('.modal')               //O popup que abre
const overlay = document.querySelector('.overlay')           //Fundo desfocado
const btnCloseModal = document.querySelector('.close-modal') //SVNJWIDFUVNWDFIOVUE

const btnsOpenModal = document.querySelectorAll('.show-modal')
//Como o query selector seleciona só o primeiro, temos que usar o all que vai pegar todas e armazenar num array

//btnsOpenModal.forEach(btn => console.log(btn.textContent))
//Itera por cada botao e mostra o texto em cada um desses elementos no vetor

btnsOpenModal.forEach(btn => btn.addEventListener('click', function() {
    console.log('Botão clicado');

    modal.classList.remove('hidden')         //O classList dispensa a necessidade do ponto
    overlay.classList.remove('hidden')
}))

const closeModal = function () {
    modal.classList.add('hidden')         
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click',closeModal)



document.addEventListener('keydown', function(e) {
    console.log("Pressionei uma tecla");
    console.log(e);
    
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
    //Se a tecla precionada for esc e se o modal nao tiver o hiddden ele executa a função closemodal
})