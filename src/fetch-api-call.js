const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json();
  })
  .then(users => {
    console.log(users);
  });

// fetch API is not implemented in Node 
// had to install <npm i node-fetch --save>
// const fetch = require("node-fetch");