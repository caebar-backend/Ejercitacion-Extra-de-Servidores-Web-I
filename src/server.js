const { getProducts } = require('./models/products');
const chalk = require("chalk")

const productos = JSON.stringify(getProducts(), null, 2)

// Maneja la ruta principal
const handleHome = (req, res) => {
              res.writeHeader(200, { "content-type": "text/plain; charset=utf-8" })
              res.end('Bienvenid@s! Gracias por tu visita.')
              console.log(chalk.bgYellow('Visitante -> en la raíz del sitio: Bienvenid@s! Gracias por tu visita :)'))
              
}

// Maneja la ruta de productos
const handleProducts = (req, res) => {
              res.writeHeader(200, { "content-type": "application/json; charset=utf-8" })
              res.end(productos)
              console.log(chalk.bgMagenta('Visitante -> en la página de productos :)'))
              console.log(productos)
              
}

// Maneja la ruta de contacto
const handleContact = (req, res) => {
  res.writeHeader(200, { "content-type": "text/plain; charset=utf-8" })
  res.end('Escribenos al siguiente Email: hola@webserver.com :)')
  console.log(chalk.bgCyan('Visitante -> en de contacto: Escribenos al siguiente Email: hola@webserver.com :)'))
  
  
}

// Maneja rutas no encontradas
const handleNotFound = (req, res) => {
  res.writeHeader(404, { "content-type": "text/plain; charset=utf-8" })
  res.end('No se ha encontrado la ruta ingresada.')
  console.log(chalk.redBright('Visitante -> Error 404: No se ha encontrado la ruta ingresada.'))
  
}

/**
 * Crea un servidor HTTP que utiliza la función router para manejar las solicitudes
 * @returns {http.Server} Instancia del servidor HTTP
 */
function createServer() {
  const http = require('http');
  const server = http.createServer((req, res) => {
    // Maneja todas las rutas de la aplicación
    const url = req.url;
  
    // Configurar los encabezados comunes
   res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    switch (url) {
      case '/':
        handleHome(req, res);
        break;
      case '/productos':
        handleProducts(req, res);
        break;
      case '/contacto':
        handleContact(req, res);
        break;
      default:
        handleNotFound(req, res);
        break; 
    }
  });
  
  return server;
}

module.exports = createServer;
