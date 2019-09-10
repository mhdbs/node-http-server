var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// const WebSocket = require('ws')
 
// const wss = new WebSocket.Server({ port: 4000 })
 
// wss.on('connection', ws => {
//   ws.on('message', message => {
//     console.log(`Received message => ${message}`)
//   })
//   ws.send('Hello! Message From Server!!')
// })
app.post('/', function (req, res) {  
   // Prepare output in JSON format  
   console.log(req.body); 
   res.sendStatus(200) 
})  
var server = app.listen(3000, function () {  
  var host = "localhost"  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  