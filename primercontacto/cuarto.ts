const mostrar: (number) => void = n => console.log(n);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach(numero => console.log(numero));

const r1 = numeros.map(n => n + 1);
r1.forEach(mostrar);

const r2 = numeros.filter(n => n % 2 === 0);
r2.forEach(mostrar);

const r3 = numeros.reduce((a, b) => a + b);
console.log('La suma es: ' + r3);

numeros.reverse().sort().forEach(mostrar);
numeros.sort((a, b) => b - a).forEach(mostrar);