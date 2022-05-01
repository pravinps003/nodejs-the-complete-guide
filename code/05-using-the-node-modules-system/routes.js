const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write(
      `
            <html>
            <head><title>Enter Message</title></head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message"/>
                    <button type="submit">Send</button>
                </form>
            </body>
            </html>
            `
    );
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      /* fs.writeFileSync is a synchronous method whereas
          fs.writeFile asynchronously writes data to a file, providing a callback */
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(
    `
        <html>
            <head><title>My First Page</title></head>
            <body>
                <h1>
                    Hello from my Node.js Server!
                </h1>
            </body>
        </html>
        `
  );
  res.end();
};

/* Different ways of handling exports from a file */
// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text',
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
