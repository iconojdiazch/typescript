/// <reference path="identificable.ts" />
/// <reference path="base.ts" />
namespace Sistema {
  class Persona extends Persistencia.Base {
    constructor(public nombre: string = "", public id: number = 0) {
      super(id);
    }
  }
  const p = new Persona('abc', 25);
  p.guardar();
  p.mostrar();
}
