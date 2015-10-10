
/* objetos y funciones */
var my_object = new Object();

var other_object = {};
 var person = new Object()

my_object = {
	firstName: 'Alejandro',
	lastName: 'Romero',
	phone: 1137373
};
person = {
	nombre: 'Ricardo',
	apellido: 'Ardila',
	telefono: 3002322654
	
	};
	
	console.log(person.nombre);
	console.log(person.apellido);




var key;

for(key in my_object){
	console.log(my_object[key]);
}

 var llave;
 
 for(llave in person){
	 console.log(person[llave]);
	 }


// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();