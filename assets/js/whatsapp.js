/* 
* Author: Gabriel Chávez
* Website: https://gabrielchavez.me
*/

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '5493874082626';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name = document.querySelector('#name').value
        let direccion = document.querySelector('#direccion').value
        let pedido = document.querySelector('#pedido').value
        let message = 'send?phone=' + phone + '&text=*_Pedido para EL TIO RICO_*%0A*Datos del cliente*%0A*¿Cual es tu nombre?*%0A' + name + '%0A*¿Cuál es tu dirección?*%0A' + direccion + '%0A*¿Cuál es tu pedido?*%0A' + pedido + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

        $form.reset()

    }, 4000);

    

});


