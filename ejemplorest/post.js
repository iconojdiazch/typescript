var nodo1 = document.getElementById("hueco1");
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'uno',
        body: 'uno body',
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => response.json())
    .then(json => nodo1.innerHTML = JSON.stringify(json));
