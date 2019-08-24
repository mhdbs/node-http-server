const http = require('http')

const server = http.createServer(function(request, response) {

  if (request.method == 'POST') {
    var body = ''
    request.on('data', function(data) {
      body += data
    })
    request.on('end', function() {
      console.log('Body: ' + body)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('post received')
    })
  } 
})

const port = 3000
const host = 'localhost'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)

