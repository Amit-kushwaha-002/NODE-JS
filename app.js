const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);

  res.write("Hello Amit, your server is working!");
  res.write("NOW...............")
  res.end();
  // process.exit(); // stop event loop
  
});


const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
