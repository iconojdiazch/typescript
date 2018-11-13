import { util, GitHubRepo } from './utiles';
import { domUtil } from './domutiles';

export const busqueda = {
    buscarRepos: (donde: Node, url: string) =>
        fetch(url)
            .then(response => response.json())
            .then(
                (json:GitHubRepo[]) => json
                    .map((item: GitHubRepo) => domUtil.nuevoNodo(donde, 'div', item))
            )
            .catch(error => util.log(error))
};