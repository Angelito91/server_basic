import http from 'http'
import url from 'url'

//Obtenido PORT de las variables de entorno
const PORT = process.env.PORT ?? 3000

// creando el servidor
const server = http.createServer()

// escucha el evento request y devuelve un response
server.on('request',(req,res) => {
    if(req.url === '/about'){
        // creando el html
        const html = '<h1 style="color:red; text-align:center; margin-top: 20px">About</h1>'

        // enviando la respuesta
        res.writeHead(200,{'Content-Type': 'text/html'})
        return res.end(html)

    } else if(req.url === '/contact'){
        // creando el html
        const html = '<h1 style="color:red; text-align:center; margin-top: 20px">Contact</h1>'

        // enviando la respuesta
        res.writeHead(200,{'Content-Type': 'text/html'})
        return res.end(html)

    } else {
        // obteniendo el parametro user
        const parametro = url.parse(req.url,true)
        let user = ''
    
        if(parametro.query.user){
            user = parametro.query.user
        } else {
            user = 'Usuario'
        }

        // creando html
        const html = `<h1 style="color:red; text-align:center; margin-top: 20px"> Hola ${user}, como estas? </h1>`
        
        // enviando la respuesta
        res.writeHead(200,{'Content-Type': 'text/html'})
        return res.end(html)
    }
})

//Servidor escuchando
server.listen(PORT,() => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
