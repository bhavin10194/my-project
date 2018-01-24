const http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'content':'text/html'});
  res.end('Hello node');
}).listen(8000);
