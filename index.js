// 1. Importar el modulo http 
import http from "http";

// 2. Crear el servidor 
// cb (callback) es una *funcion* que se ejecutara 
// ante cualquier peticion de un recurso a nuestro server 
// (request, response) 

const server = http.createServer((req, res) => {
    // Creando un logger de peticiones
      console.log(`📣 CLIENT-REQUEST: ${req.method} ${req.url}`);
      console.log(`url: ${JSON.stringify(req.headers, null, "\t")}`);
      res.write("Check the system terminal...")
      res.end();
});


// 3. Se pone a trabajar el servidor 
// Se le pasa un callback que se ejecutara cunado
// el servidor empiece a recibir peticiones 

server.listen(3000, "0.0.0.0", () => {
  console.log("👩‍🍳 Servidor escuchando en http://localhost:3000"); 
});