import { domUtil } from './domutiles';
import { busqueda } from './busquedas';

window.addEventListener(
    'load',
    () => {
        const nodo = document.querySelector('#texto') as HTMLInputElement;
        const boton = document.querySelector('#boton') as Node;
        const hueco = document.querySelector('#hueco') as Node;
        boton.addEventListener(
            'click',
            () => {
                const apiUrl = `https://api.github.com/users/${nodo.value}/repos`;
                domUtil.limpiar(hueco);
                busqueda.buscarRepos(hueco, apiUrl);
            }
        );
    }
);