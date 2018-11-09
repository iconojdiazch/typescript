import { Identificable } from './identificable';

const repo: Identificable[] = [];
export class Base implements Identificable {
  constructor(public id: number) { }
  guardar() {
    repo.push(this);
  }
  mostrar() {
    repo.filter(item => item.id === this.id).forEach(item => console.log(item));
  }
}  
