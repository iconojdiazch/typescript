import { GitHubRepo } from './utiles'

export const domUtil = {
    limpiar: (nodo: Node) => {
        while (nodo.lastChild !== null) {
            nodo.removeChild(nodo.lastChild);
        }
    },
    nuevoNodo: (ancestro: Node, descendiente: string, contenido: GitHubRepo) => {
        const ancla = document.createElement("a");
        ancla.setAttribute('href', contenido.html_url);
        ancla.setAttribute('target', '_blank');
        const nodoTexto = document.createTextNode(contenido.name);
        ancla.appendChild(nodoTexto);
        const desc = document.createElement(descendiente);
        desc.appendChild(ancla);
        ancestro.appendChild(desc);
    }
};