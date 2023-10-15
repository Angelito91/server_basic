import http from 'http'

//Obtenido PORT de las variables de entorno
const PORT = process.env.PORT ?? 3000

// creando el servidor
const server = http.createServer()

// escucha el evento request y devuelve un response
server.on('request',(req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.end('<h1 style="color:red; text-align:center; margin-top: 20px"> Hola usuario, como estas? </h1>')
})

//Servidor escuchando
server.listen(PORT,() => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
