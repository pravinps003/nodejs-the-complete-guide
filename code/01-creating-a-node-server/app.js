const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();

  /* Check out more for Request and Response Headers: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers */

  /* The process core module provides a handy method that allows you to programmatically exit from a Node.js program */
  // process.exit();
});

server.listen(3000);
