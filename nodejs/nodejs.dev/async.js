const fetch = require('node-fetch');
const cowsay = require('cowsay');

(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    console.log(cowsay.say({text: `There are ${posts.length} posts.`}));
})();
