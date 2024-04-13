function mensajeRecibido() {
    let nombre = document.getElementsByName("nombre")[0].value;
    let correo = document.getElementsByName("correo")[0].value;
    let mensaje = document.getElementsByName("mensaje")[0].value;

    let mensajeRecibido = document.getElementById("mensaje-confirmado");

    mensajeRecibido.innerHTML = `¡Muchas gracias por contactarte con nosotros <strong>${nombre}</strong>!`;
    document.getElementById("contact-form").reset();
    setTimeout(deleteMessage, 7500);
}

function deleteMessage() {
    let mensajeRecibido = document.getElementById("mensaje-confirmado");
    mensajeRecibido.innerHTML = "";
}