function primera(texto: string) {
    return 'Recibido: ' + texto;
}
const mensaje = 'Primer contacto';
document.body.innerHTML = primera(mensaje);