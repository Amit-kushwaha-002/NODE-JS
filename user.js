// Create server 
const http = require('http');

const server = http.createServer((req, res) => {

  const url = req.url;   // ✅ define variable

  console.log(url);

  res.setHeader("Content-Type", "text/html"); 
  res.setHeader("content-type" , "text/html")
  
  if (url === '/') {

    res.write(`<form action="/submit-details" method="POST">
      <input type="text" name="username" placeholder="Enter your name"><br><br>

      <label>Gender:</label><br>

      <input type="radio" id="male" name="Gender" value="male">
      <label for="male">Male</label><br>

      <input type="radio" id="female" name="Gender" value="female">
      <label for="female">Female</label><br><br>

      <button type="submit">Submit</button>

    </form>`);

    return res.end();
  }

  res.end("Page not found");

});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});



