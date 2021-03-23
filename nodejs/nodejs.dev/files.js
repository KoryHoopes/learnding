const fs = require('fs');

fs.open('./test.txt', 'r', (err, fd) => {
    console.log(fd);
})

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
})