"use strict";
var ejercicio0001;
(function (ejercicio0001) {
    var s = 'abc';
    console.log(s);
    s = 'def';
    console.log(s);
    var uno = 'abc';
    var dos = uno;
    var tres = uno;
    var arr1 = [1, true];
    var arr2 = [1, true];
    var arr3 = [1, true];
    var cuatro = 5;
    cuatro = true;
    var Direcciones;
    (function (Direcciones) {
        Direcciones[Direcciones["NORTE"] = 0] = "NORTE";
        Direcciones[Direcciones["SUR"] = 1] = "SUR";
        Direcciones[Direcciones["ESTE"] = 2] = "ESTE";
        Direcciones[Direcciones["OESTE"] = 3] = "OESTE";
    })(Direcciones || (Direcciones = {}));
    ;
    function d(direccion) {
        console.log(Direcciones[direccion]);
    }
    d(Direcciones.ESTE);
})(ejercicio0001 || (ejercicio0001 = {}));
var ejercicio0002;
(function (ejercicio0002) {
    var persona = {
        nombre: 'uno',
        edad: 25
    };
    function decodificar(p) {
        var nombre = p.nombre, edad = p.edad;
        return {
            edad: edad - 1,
            nombre: nombre + ' corregido'
        };
    }
    var r = decodificar(persona);
    console.log(r);
    var elemento = document.createElement('div');
    elemento.classList.add('solucion');
    elemento.innerHTML = JSON.stringify(r);
    document.body.appendChild(elemento);
})(ejercicio0002 || (ejercicio0002 = {}));
var ejercicio0003;
(function (ejercicio0003) {
    var persona = {
        nombre: 'uno',
        edad: 25
    };
    function decodificar(p) {
        var nombre = p.nombre, edad = p.edad;
        return {
            edad: edad - 10,
            nombre: nombre + ' corregido usando interfaces'
        };
    }
    var r = decodificar(persona);
    console.log(r);
    var elemento = document.createElement('div');
    elemento.classList.add('solucion');
    elemento.innerHTML = JSON.stringify(r);
    document.body.appendChild(elemento);
})(ejercicio0003 || (ejercicio0003 = {}));
var ejercicio0004;
(function (ejercicio0004) {
    var gato = {
        nombre: 'Gato',
        edad: 8,
        maullar: function () { return 'Miau'; },
        mostrar: function () { return "Soy un " + this.nombre + ", mi edad es " + this.edad + " y digo " + this.maullar(); }
    };
    var perro = {
        nombre: 'Perro',
        ladrar: function () { return 'Guau'; },
        mostrar: function () {
            return this.edad ?
                "Soy un " + this.nombre + ", mi edad es " + this.edad + " y digo " + this.ladrar()
                :
                    this.ladrar();
        }
    };
    var animales = [gato, perro];
    for (var animal in animales) {
        console.log(animales[animal].mostrar());
    }
    for (var _i = 0, animales_1 = animales; _i < animales_1.length; _i++) {
        var animal = animales_1[_i];
        console.log(animal.mostrar());
    }
    animales.forEach(function (a) { return console.log(a.mostrar()); });
})(ejercicio0004 || (ejercicio0004 = {}));
