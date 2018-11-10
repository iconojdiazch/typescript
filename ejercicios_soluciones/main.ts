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
        nombre: 'Gato',
        edad: 8,
        maullar: function () { return 'Miau'; },
        mostrar: function () { return `Soy un ${this.nombre}, mi edad es ${this.edad} y digo ${this.maullar()}`; }
    }
    const perro: Perro = {
        nombre: 'Perro',
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