// const http = require ('http')

// const server = http.createServer((req , res ) => {
//   console.log(req.url);

//   if(req === '/home'){
//     res.write('<h1>WELCOME TO HOME> <h1>')
//   }else if(req === 'men'){
//     res.write('<h1>WELCOME TO MEN> <h1>')
//   }else if(req === '/women'){
//     res.write('<h1>WELCOME TO women> <h1>')
//   }else if(req === '/Kids'){
//     res.write('<h1>WELCOME TO KIDS> <h1>')
//   }else if(req === '/Other'){
//     res.write('<h1>WELCOME TO OTHER> <h1>')
//   re  





//   res.write( '    <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>SHOOPING SITE</title>
// </head>
// <body>
//   <nav>
//     <ul>
//       <li>
//         <h1><a href="/Home">HOME</a></h1>
//         <h1><a href="/men">MEN</a></h1>
//         <h1><a href="/women">WOMEN</a></h1>
//         <h1><a href="/Kids">KIDS</a></h1>
//         <h1><a href="/Other">OTHER</a></h1>
//       </li>
//     </ul>
//   </nav>
// </body>
// </html> ')

  
// })

// const port = 3001;
// server.listen(port , () => {
//   console.log(`Server is running http://localhost${port}`);
  
// })



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
