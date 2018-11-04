window.addEventListener(
    'load',
    () => {
        function saludo(texto: string): string {
            return texto.toUpperCase();
        }

        console.log(saludo('mensaje'));

        const nodo = document.createElement("div");
        nodo.innerHTML = saludo('Nuevo mensaje');

        document.body.appendChild(nodo);
    }
);
