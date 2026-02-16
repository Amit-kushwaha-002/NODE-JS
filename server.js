const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.write("Hello Amit, your server is working!");
  res.end();
  // process.exit(); // stop event loop
  
});


const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
