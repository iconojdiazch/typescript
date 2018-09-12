interface Persona {
    nombre: string;
    apellido: string;
}

function segunda(persona: Persona) {
    return "Los datos de la persona son: " + persona.nombre + " " + persona.apellido;
}

let usuario = { nombre: "uno", apellido: "dos" };

console.log(segunda(usuario));