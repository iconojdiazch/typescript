var a = fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
}).then(response => response.json())
.then(json => console.log(json));
console.log("DELETE");
console.log(a);