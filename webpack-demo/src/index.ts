class Persona {
    nombre: string;
    constructor(n: string) {
        this.nombre = n;
    }
}

const p = new Persona('Un nombre cualquiera');

let element = document.createElement('div');

element.innerHTML = p.nombre;

document.body.appendChild(element);




