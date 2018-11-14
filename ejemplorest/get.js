var nodo = document.getElementById("hueco");
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => nodo.innerHTML = JSON.stringify(json));