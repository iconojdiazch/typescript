import {Base} from './base';

class Persona extends Base{
    constructor(public nombre: string = "", public id: number = 0) {
      super(id);
    }  
  }
  const p = new Persona('abc', 25);
  p.guardar();
  p.mostrar();