import http from 'http'
import fs from 'fs'

//Obtenido PORT de las variables de entorno
const PORT = process.env.PORT ?? 3000

// creando el servidor
const server = http.createServer()

// escucha el evento request y devuelve un response
server.on('request', (req, res) => {
  if (req.url === '/about') {   
    // Obteniendo el fichero about.html
    const html = fs.readFileSync('about.html', 'utf-8')

    // Devolviendo el fichero contact.html
    res.writeHead(200, { 'Content-Type': 'text/html' })
    return res.end(html)

  } else if (req.url === '/contact') {
    // Obteniendo el fichero contact.html
    const html = fs.readFileSync('contact.html', 'utf-8')

    // Devolviendo el fichero contact.html
    res.writeHead(200, { 'Content-Type': 'text/html' })
    return res.end(html)

  } else {
    // Devolviendo el fichero index.html
    const html = fs.readFileSync('index.html', 'utf-8')

    // Devolviendo el fichero index.html
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(html)
  }
})

//Servidor escuchando
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
