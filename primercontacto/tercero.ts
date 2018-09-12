class Estudiante {
    nombreCompleto: string;
    constructor(public nombre: string, public inicial: string, public apellido: string) {
        this.nombreCompleto = nombre + " " + inicial + " " + apellido;
    }
}

interface Persona {
    nombre: string;
    apellido: string;
}

function tercero(persona : Persona) {
    return "Los datos de la persona son: " + persona.nombre + " " + persona.apellido;
}

let persona = new Estudiante("uno", "J", "dos");

console.log(tercero(persona));
console.log(persona);