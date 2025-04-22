# Actividad: Servidor HTTP con Node.js

Este proyecto es una actividad para poner en práctica los conocimientos sobre la creación de servidores HTTP

# Guía del Estudiante: Servidor HTTP con Node.js

Esta guía te ayudará a completar la actividad práctica sobre servidores HTTP con Node.js.

## Antes de Empezar

Asegurate de tener instalados:
- Node.js (versión 14.0.0 o superior)
- npm (viene incluido con Node.js)
- Un editor de código (como VS Code, Sublime Text, etc.)

## Pasos para Completar la Actividad

### 1. Preparación del Entorno

1. Cloná el repositorio del proyecto:
   ```
   git clone <url-del-repositorio>
   ```

2. Navegá al directorio del proyecto:
   ```
   cd node-http-server-assignment
   ```

3. Instalá las dependencias:
   ```
   npm install
   ```

### 2. Comprensión de los Requisitos

Revisá detenidamente el archivo README.md para entender lo que se espera que implementes. En resumen:

- Debés crear un servidor HTTP que maneje 3 rutas específicas y un caso para rutas no definidas
- Cada ruta debe devolver un tipo específico de contenido (texto plano o JSON)
- Debés configurar correctamente los encabezados y códigos de estado HTTP

### 3. Exploración de la Estructura del Proyecto

Familiarizate con los archivos del proyecto:

- `server.js`: Aquí configurarás el servidor HTTP principal
- `src/routes.js`: Aquí implementarás los manejadores de cada ruta
- `src/models/products.js`: Contiene los datos de productos (ya implementado)
- `tests/server.test.js`: Contiene las pruebas que evaluarán tu implementación

### 4. Implementación Paso a Paso

#### Paso 1: Configurar el Servidor HTTP

Abre `server.js` y asegúrate de que el servidor:
- Importa el módulo `http` de Node.js
- Crea un servidor que escuche en el puerto 3000
- Redirige las solicitudes al manejador de rutas
- Exporta el servidor para que las pruebas puedan usarlo

#### Paso 2: Implementar los Manejadores de Rutas

Abre `src/routes.js` e implementa:

1. El manejador principal (`handleRoutes`) que:
   - Analiza la URL de la solicitud
   - Dirige a la función apropiada según la ruta

2. Manejadores específicos para cada ruta:
   - `handleHome`: Para la ruta "/"
   - `handleProducts`: Para la ruta "/productos"
   - `handleContact`: Para la ruta "/contacto"
   - `handleNotFound`: Para cualquier otra ruta

#### Paso 3: Verificar la Implementación

Una vez completada la implementación:

1. Inicia el servidor:
   ```
   npm run dev
   ```

2. Abre un navegador y visita:
   - http://localhost:3000/
   - http://localhost:3000/productos
   - http://localhost:3000/contacto
   - http://localhost:3000/ruta-inexistente

3. Verifica que cada ruta muestre el contenido esperado.

#### Paso 4: Ejecutar las Pruebas

Ejecuta las pruebas automatizadas para verificar tu implementación:
```
npm test
```

Analiza los resultados:
- Si todas las pruebas pasan, ¡felicidades! Has completado la actividad correctamente.
- Si alguna prueba falla, lee el mensaje de error para entender qué necesita ser corregido.

### 5. Consejos para Resolver Problemas Comunes

- **Encabezados HTTP**: Asegurate de establecer `Content-Type` correctamente:
  - Para texto: `'text/plain; charset=utf-8'`
  - Para JSON: `'application/json'`

- **Formato JSON**: Usa `JSON.stringify()` para convertir objetos JavaScript a formato JSON antes de enviarlos.

- **Códigos de Estado**: Configura `res.statusCode` antes de llamar a `res.end()`.

- **Cierre del Servidor**: Asegúrate de exportar el servidor y no iniciarlo directamente en el archivo para que las pruebas puedan cerrarlo.

## Recursos de Aprendizaje

Para profundizar en los conceptos de esta actividad:

- [Documentación oficial del módulo HTTP de Node.js](https://nodejs.org/docs/latest/api/http.html)
- [Tutorial: Creación de un servidor web con Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Códigos de estado HTTP en MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

## Preguntas Frecuentes

**P: ¿Puedo usar Express.js u otros frameworks?**
R: No. Esta actividad está diseñada para practicar con el módulo HTTP nativo de Node.js.

**P: ¿Cómo confirmo que mi implementación cumple con todos los requisitos?**
R: Ejecutando las pruebas automatizadas con `npm test`. Si todas las pruebas pasan, tu implementación cumple con los requisitos.

**P: ¿Qué hago si una prueba falla pero creo que mi código es correcto?**
R: Revisa cuidadosamente el mensaje de error de la prueba. Compara tu implementación con los requisitos específicos. Si sigues creyendo que tu código es correcto, consulta con tu instructor.

---

¡Buena suerte! Recuerda que el objetivo principal de esta actividad es aprender y practicar los conceptos fundamentales de servidores HTTP en Node.js.