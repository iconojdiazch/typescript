const log = (texto: string) => {
    console.log('La función log ha sido evaluada:' + texto);
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('La función log ha sido llamada');
        console.log('Target:' + JSON.stringify(target));
        console.log('Property: ' + JSON.stringify(propertyKey));
        console.log('Descriptor: ' + JSON.stringify(descriptor));
    }
}
class Cualquiera {
    @log('Test')
    metodoLogeable() { console.log('Prueba'); }
}
const c = new Cualquiera();
c.metodoLogeable()