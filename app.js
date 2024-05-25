const formulario = {
    nombre: '',
    email: '',
    mensaje: '',
}

// Seleccionar los elementos de la interfaz
const $form = document.getElementById('form');
const $nombre = document.getElementById('nombre');
const $email = document.getElementById('email');
const $mensaje = document.getElementById('mensaje');
const $btnSubmit = document.querySelector('#form button[type=submit]');
const $btnReset = document.querySelector('#form button[type=reset]');

// Asignar eventos
$form.addEventListener('submit', enviarFormulario);

$nombre.addEventListener('input', validar);
$email.addEventListener('input', validar);
$mensaje.addEventListener('input', validar);

function enviarFormulario(e) {
    e.preventDefault();
    
    const alertaEnviado = document.createElement('P');
    alertaEnviado.classList.add('enviado');
    alertaEnviado.textContent = 'Mensaje enviado correctamente';
    $form.appendChild(alertaEnviado);

    resetForm();

    setTimeout(() => {
        alertaEnviado.remove();
    }, 3000);

}

function validar() {
    
}

function resetForm() {
    formulario.nombre = '';
    formulario.email = '';
    formulario.mensaje= '';

    $form.reset();
}