function segunda(persona) {
    return "Los datos de la persona son: " + persona.nombre + " " + persona.apellido;
}
var usuario = { nombre: "uno", apellido: "dos" };
console.log(segunda(usuario));
