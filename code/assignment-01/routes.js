const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `
        <html>
        <head><title>Create User</title></head>
        <body>
            <form action="/create-user" method="POST">
                <input type="text" name="username"/>
                <button type="submit">Send</button>
            </form>
        </body>
        </html>
        `
    );
    return res.end();
  } else if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `
          <html>
          <head><title>Users</title></head>
          <body>
            <ul>
                <li>Pravin</li>
                <li>Pooja</li>
                <li>Padma</li>
            </ul>
          </body>
          </html>
          `
    );
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    });
  }
};

module.exports = requestHandler;
