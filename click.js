// create server

const http = require('http');

const server = http.createServer((req, res) => {

  console.log(req.url);

  res.setHeader("Content-Type", "text/html");

  if (req.url === '/home') {

    res.write('<h1>WELCOME TO HOME</h1>');

  } else if (req.url === '/men') {

    res.write('<h1>WELCOME TO MEN</h1>');

  } else if (req.url === '/women') {

    res.write('<h1>WELCOME TO WOMEN</h1>');

  } else if (req.url === '/kids') {

    res.write('<h1>WELCOME TO KIDS</h1>');

  } else if (req.url === '/other') {

    res.write('<h1>WELCOME TO OTHER</h1>');

  }

  // Navigation menu
  res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>SHOPPING SITE</title>
    </head>
    <body>

      <nav>
        <h2><a href="/home">HOME</a></h2>
        <h2><a href="/men">MEN</a></h2>
        <h2><a href="/women">WOMEN</a></h2>
        <h2><a href="/kids">KIDS</a></h2>
        <h2><a href="/other">OTHER</a></h2>
      </nav>

    </body>
    </html>
  `);

  res.end();

});

const port = 3001;

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});

