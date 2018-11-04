export class Persona {
    nombre: string;
    edad: Number;
    constructor(n: string, e: Number) {
        this.nombre = n;
        this.edad = e;
    }
    toString() {
        return `Nombre: ${this.nombre}. Edad: ${this.edad}`;
    }
}

const persona = new Persona("Un nombre cualquiera",25);
console.log(persona.toString());

const nodo = document.createElement("div");
nodo.innerHTML = persona.toString();

document.body.appendChild(nodo);
