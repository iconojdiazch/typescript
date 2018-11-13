namespace ejercicio0001 {
    let s = 'abc';
    console.log(s);
    s = 'def';
    console.log(s);
    const uno: any = 'abc';
    const dos = uno as string;
    const tres = <string>uno;
    const arr1: any = [1, true];
    const arr2: [number, boolean] = [1, true];
    const arr3: (number | boolean)[] = [1, true];
    let cuatro: number | boolean = 5;
    cuatro = true;
    enum Direcciones { NORTE, SUR, ESTE, OESTE };
    function d(direccion: Direcciones) {
        console.log(Direcciones[direccion]);
    }
    d(Direcciones.ESTE);
}
namespace ejercicio0002 {
    const persona = {
        nombre: 'uno',
        edad: 25
    };
    function decodificar(p: { nombre: string, edad: number }) {
        const { nombre, edad } = p;
        return {
            edad: edad - 1,
            nombre: nombre + ' corregido'
        }
    }
    const r = decodificar(persona);
    console.log(r);
    const elemento = document.createElement('div');
    elemento.classList.add('solucion');
    elemento.innerHTML = JSON.stringify(r);
    document.body.appendChild(elemento);
}
namespace ejercicio0003 {
    interface Persona {
        nombre: string;
        edad: number;
    }
    const persona: Persona = {
        nombre: 'uno',
        edad: 25
    };
    function decodificar(p: Persona) {
        const { nombre, edad } = p;
        return {
            edad: edad - 10,
            nombre: nombre + ' corregido usando interfaces'
        }
    }
    const r = decodificar(persona);
    console.log(r);
    const elemento = document.createElement('div');
    elemento.classList.add('solucion');
    elemento.innerHTML = JSON.stringify(r);
    document.body.appendChild(elemento);
}
namespace ejercicio0004 {
    interface Animal {
        mostrar(): string;
        readonly nombre: string;
        edad?: number;
    }
    interface Perro extends Animal {
        ladrar(): string;
    }
    interface Gato extends Animal {
        maullar(): string;
    }
    const gato: Gato = {
        nombre: 'Gato usando interfaces',
        edad: 8,
        maullar: function () { return 'Miau'; },
        mostrar: function () { return `Soy un ${this.nombre}, mi edad es ${this.edad} y digo ${this.maullar()}`; }
    }
    const perro: Perro = {
        nombre: 'Perro usando interfaces',
        ladrar: function () { return 'Guau'; },
        mostrar: function () {
            return this.edad ?
                `Soy un ${this.nombre}, mi edad es ${this.edad} y digo ${this.ladrar()}`
                :
                this.ladrar();
        }
    }
    const animales: Animal[] = [gato, perro];
    for (const animal in animales) {
        console.log(animales[animal].mostrar());
    }
    for (const animal of animales) {
        console.log(animal.mostrar());
    }
    animales.forEach(a => console.log(a.mostrar()));
}
namespace ejercicio0005 {
    abstract class Animal {
        abstract mostrar(): string;
        constructor(public nombre: string, public edad?: number) { }
    }
    class Perro extends Animal {
        constructor(nombre: string, edad: number) {
            super(nombre, edad);
        }
        ladrar(): string { return 'Guau'; };
        mostrar() {
            return this.edad ?
                `Soy un ${this.nombre}, mi edad es ${this.edad} y digo ${this.ladrar()}`
                :
                this.ladrar();
        }
    }
    class Gato extends Animal {
        constructor(nombre: string, edad: number) {
            super(nombre, edad);
        }
        maullar(): string { return 'Miau'; };
        mostrar() { return `Soy un ${this.nombre}, mi edad es ${this.edad} y digo ${this.maullar()}`; }
    }
    const gato: Gato = new Gato('Gato usando clases', 8);
    const perro: Perro = new Perro('Perro usando clases', 10);

    const animales: Animal[] = [gato, perro];
    animales.forEach(a => console.log(a.mostrar()));
}
namespace ejercicio0006 {
    interface Conjunto<T> {
        nuevo(item: T): boolean;
        buscar(item: T): T;
        mostrar(): void;
    }
    class ConjuntoImpl<T> implements Conjunto<T>{
        private readonly almacen: T[] = [];
        nuevo(item: T): boolean {
            if (this.buscar(item) === null) {
                this.almacen.push(item);
                return true;
            } else {
                return false;
            }
        }
        buscar(item: T): T {
            const z = this.almacen.filter(e => e === item);
            if (z.length === 0)
                return null;
            else
                return z[0];
        }
        mostrar() {
            this.almacen.forEach(i => console.log(i));
        }
    }
    interface Persona { n: string, e: number };
    const p: Persona = { n: 'abc', e: 20 };
    const c: Conjunto<Persona> = new ConjuntoImpl<Persona>();
    console.log(c.nuevo(p));
    console.log(c.nuevo(p));
    c.mostrar();
}
namespace ejercicio0007 {
    export class Repo<T extends { nombre: string, edad: number }> {
        private readonly repo: T[] = [];
        guardarUnaVez(...objetos: T[]) {
            objetos.forEach(
                p => {
                    if (this.repo.indexOf(p) !== -1) {
                        console.log(`El objeto ${JSON.stringify(p)} ya existe`);
                    }
                    else {
                        this.repo.push(p);
                        console.log(`Nuev objeto ${JSON.stringify(p)} añadido`);
                    }
                }
            );
            return objetos;
        }
        localizarPorNombre(n: string) {
            return this.repo.filter(p => p.nombre === n);
        }
        cambiarTodasLasEdades(e: number) {
            return this.repo.map(p => ({ nombre: p.nombre, edad: e }));
        }
    }
}
namespace ejercicio0007_1 {
    class Persona {
        constructor(public nombre: string, public edad: number) { }
    }
    const r = new ejercicio0007.Repo<Persona>();
    const p = new Persona('abc usando clases', 25);
    const p1 = new Persona('def usando clases', 30);
    r.guardarUnaVez(p, p1, p);
    console.log(r.localizarPorNombre('def usando clases'));
    console.log(r.cambiarTodasLasEdades(20));
}
namespace ejercicio0007_2 {
    type Persona = {
        nombre: string;
        edad: number;
    }
    const r = new ejercicio0007.Repo<Persona>();
    const p = { nombre: 'abc usando tipos', edad: 25 };
    const p1 = { nombre: 'def usando tipos', edad: 30 };
    r.guardarUnaVez(p, p1, p);
    console.log(r.localizarPorNombre('def usando tipos'));
    console.log(r.cambiarTodasLasEdades(20));
}