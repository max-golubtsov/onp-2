document.addEventListener('DOMContentLoaded', function () {

    const catalogButtons = document.querySelectorAll('.button-catalog');
    const catalogMenu = document.querySelector('.menu-container');
    const modalWindow = document.querySelector('.modal-window');
    const registrationBtn = document.querySelector('.user-profile__enter');
    const registration = document.querySelector('.registration');
    const registrationClose = document.querySelector('.button-close');

    for (let button of catalogButtons){
        button.addEventListener('click',function (){
            if (button.classList.contains('button-catalog--active')){
                for (let button of catalogButtons){
                    button.classList.remove('button-catalog--active')
                }
            }else {
                for (let button of catalogButtons){
                    button.classList.add('button-catalog--active')
                }
            }
        })
    }

    catalogButtons.forEach(function (button) {
            button.addEventListener('click',function (){
            catalogMenu.classList.toggle('menu-container--open');
            ModalWindow();
        })
    })
    registrationBtn.addEventListener('click',function (){
        registration.classList.toggle('registration--open');
        ModalWindow();
    })

    registrationClose.addEventListener('click',function (){
        registration.classList.remove('registration--open');
        ModalWindow();
    })

    function ModalWindow() {
           modalWindow.classList.toggle('modal-window--open')
    }
})