/**
 * Punto de entrada principal de la aplicación
 * Inicia el servidor HTTP en el puerto 3000
 */
const createServer = require('./src/server');

const chalk = require('chalk')

// Puerto en el que escuchará el servidor
const PORT = 3000;

// Crear el servidor
const server = createServer();

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(chalk.bgGray(`Servidor escuchando en http://localhost:${PORT}/`));
  console.log(chalk.gray(`Servidor escuchando en http://localhost:${PORT}/productos`));
  console.log(chalk.bgGray(`Servidor escuchando en http://localhost:${PORT}/contacto`));
  console.log(chalk.gray('Presiona Ctrl+C para detener el servidor'));
});

// Exportar el servidor para pruebas
module.exports = server;