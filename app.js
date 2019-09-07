var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    var allowedOrigins = [
        "http://127.0.0.1:3000",
        "http://localhost:3000"
    ];

    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,Content-Type,X-Auth-Token"
    );
    res.setHeader('Access-Control-Allow-Origin','*');

    res.setHeader("Access-Control-Allow-Credentials", true);

    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});
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