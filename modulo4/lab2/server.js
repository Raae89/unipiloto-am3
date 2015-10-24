var http = require('http'); //modulo de node.js 

var server = http.createServer(function(req, res){//Creando un servidor 
	res.writeHead(200, {//crear una cabecera *200(estatus correcto) 
		"Content-Type": "text/plain"//cabecera puede ser html
	});

	res.end("Hello Unipiloto APM-3\n hola");
});

server.listen(3333);