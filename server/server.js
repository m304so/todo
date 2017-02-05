var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end('To-Do List\n');
}).listen(3139);

console.log('Server running at http://127.0.0.1:3139/');