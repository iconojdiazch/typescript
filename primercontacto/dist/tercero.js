var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, inicial, apellido) {
        this.nombre = nombre;
        this.inicial = inicial;
        this.apellido = apellido;
        this.nombreCompleto = nombre + " " + inicial + " " + apellido;
    }
    return Estudiante;
}());
function tercero(persona) {
    return "Los datos de la persona son: " + persona.nombre + " " + persona.apellido;
}
var persona = new Estudiante("uno", "J", "dos");
console.log(tercero(persona));
console.log(persona);
