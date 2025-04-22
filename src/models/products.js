// Datos de productos Basado en la tabla de la actividad
const products = [
  {
    codigo: 'P001',
    nombre: 'Laptop',
    importe: 1200,
    stock: 20
  },
  {
    codigo: 'P002',
    nombre: 'Monitor',
    importe: 250,
    stock: 15
  },
  {
    codigo: 'P003',
    nombre: 'Teclado',
    importe: 50,
    stock: 30
  },
  {
    codigo: 'P004',
    nombre: 'Mouse',
    importe: 20,
    stock: 50
  },
  {
    codigo: 'P005',
    nombre: 'Impresora',
    importe: 150,
    stock: 10
  },
  {
    codigo: 'P006',
    nombre: 'Altavoces',
    importe: 80,
    stock: 25
  },
  {
    codigo: 'P007',
    nombre: 'Disco duro externo',
    importe: 100,
    stock: 40
  },
  {
    codigo: 'P008',
    nombre: 'Memoria USB',
    importe: 30,
    stock: 50
  },
  {
    codigo: 'P009',
    nombre: 'Cámara web',
    importe: 60,
    stock: 15
  },
  {
    codigo: 'P010',
    nombre: 'Router',
    importe: 70,
    stock: 20
  }
];

// Retorna la lista completa de productos
function getProducts() {
  return products;
}

module.exports = {
  getProducts
};
