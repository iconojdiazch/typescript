"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        nombre: 'Gato usando interfaces',
        edad: 8,
        maullar: function () { return 'Miau'; },
        mostrar: function () { return "Soy un " + this.nombre + ", mi edad es " + this.edad + " y digo " + this.maullar(); }
    };
    var perro = {
        nombre: 'Perro usando interfaces',
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
var ejercicio0005;
(function (ejercicio0005) {
    var Animal = /** @class */ (function () {
        function Animal(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        return Animal;
    }());
    var Perro = /** @class */ (function (_super) {
        __extends(Perro, _super);
        function Perro(nombre, edad) {
            return _super.call(this, nombre, edad) || this;
        }
        Perro.prototype.ladrar = function () { return 'Guau'; };
        ;
        Perro.prototype.mostrar = function () {
            return this.edad ?
                "Soy un " + this.nombre + ", mi edad es " + this.edad + " y digo " + this.ladrar()
                :
                    this.ladrar();
        };
        return Perro;
    }(Animal));
    var Gato = /** @class */ (function (_super) {
        __extends(Gato, _super);
        function Gato(nombre, edad) {
            return _super.call(this, nombre, edad) || this;
        }
        Gato.prototype.maullar = function () { return 'Miau'; };
        ;
        Gato.prototype.mostrar = function () { return "Soy un " + this.nombre + ", mi edad es " + this.edad + " y digo " + this.maullar(); };
        return Gato;
    }(Animal));
    var gato = new Gato('Gato usando clases', 8);
    var perro = new Perro('Perro usando clases', 10);
    var animales = [gato, perro];
    animales.forEach(function (a) { return console.log(a.mostrar()); });
})(ejercicio0005 || (ejercicio0005 = {}));
var ejercicio0006;
(function (ejercicio0006) {
    var Repo = /** @class */ (function () {
        function Repo() {
            this.repo = [];
        }
        Repo.prototype.guardarUnaVez = function () {
            var _this = this;
            var objetos = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objetos[_i] = arguments[_i];
            }
            objetos.forEach(function (p) {
                if (_this.repo.indexOf(p) !== -1) {
                    console.log("El objeto " + JSON.stringify(p) + " ya existe");
                }
                else {
                    _this.repo.push(p);
                    console.log("Nuev objeto " + JSON.stringify(p) + " a\u00F1adido");
                }
            });
            return objetos;
        };
        Repo.prototype.localizarPorNombre = function (n) {
            return this.repo.filter(function (p) { return p.nombre === n; });
        };
        Repo.prototype.cambiarTodasLasEdades = function (e) {
            return this.repo.map(function (p) { return ({ nombre: p.nombre, edad: e }); });
        };
        return Repo;
    }());
    ejercicio0006.Repo = Repo;
})(ejercicio0006 || (ejercicio0006 = {}));
var ejercicio0006_1;
(function (ejercicio0006_1) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        return Persona;
    }());
    var r = new ejercicio0006.Repo();
    var p = new Persona('abc usando clases', 25);
    var p1 = new Persona('def usando clases', 30);
    r.guardarUnaVez(p, p1, p);
    console.log(r.localizarPorNombre('def usando clases'));
    console.log(r.cambiarTodasLasEdades(20));
})(ejercicio0006_1 || (ejercicio0006_1 = {}));
var ejercicio0006_2;
(function (ejercicio0006_2) {
    var r = new ejercicio0006.Repo();
    var p = { nombre: 'abc usando tipos', edad: 25 };
    var p1 = { nombre: 'def usando tipos', edad: 30 };
    r.guardarUnaVez(p, p1, p);
    console.log(r.localizarPorNombre('def usando tipos'));
    console.log(r.cambiarTodasLasEdades(20));
})(ejercicio0006_2 || (ejercicio0006_2 = {}));
