const log = (texto: string) => {
    console.log('La función log ha sido evaluada:' + texto);
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('La función log ha sido llamada');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
}
class Cualquiera {
    @log('Test')
    metodoLogeable() { console.log('Prueba'); }
}
const c = new Cualquiera();
c.metodoLogeable()