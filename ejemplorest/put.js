var nodo2 = document.getElementById("hueco2");
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'uno',
      body: 'nuevo body',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => nodo2.innerHTML = JSON.stringify(json));