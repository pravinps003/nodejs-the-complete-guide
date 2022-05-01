const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);

  /* The process core module provides a handy method that allows you to programmatically exit from a Node.js program */
  process.exit();
});

server.listen(3000);
