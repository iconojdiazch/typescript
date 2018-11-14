import {Persona} from './persona';

const p = new Persona('Un nombre cualquiera');

const element = document.createElement('div');

element.innerHTML = p.nombre;
element.style.color = 'blue';
element.style.fontSize = '2rem';

document.body.appendChild(element);