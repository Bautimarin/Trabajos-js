const http = require('http');
const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.use(express.urlencoded({ extended: false }));


//Pagina derre
app.get('/derre', (req, res) =>  {
  res.send('¡Bienvenido a la página de derre!');
});


//Pagina de contacto
app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
});

app.listen(3000, 3306, () => {
  console.log('Creo que la aplicación está escuchando en el puerto 3000 o en el 3306');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${3000}:${3306}/`);
});