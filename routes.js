var controllerpersonaje = require('./controllerpersonaje.js');
var controllerobjeto = require('./controllerobjeto.js');
var controllerescenario = require('./controllerescenario.js');
var controlleradministrador = require('./controlleradministrador.js');

 module.exports = function(app){


 	var clasepersonaje = new controllerpersonaje();	
 	app.post('/api/guardarpersonaje', clasepersonaje.Guardar);
 	app.post('/api/modificarpersonaje', clasepersonaje.Modificar);
 	app.post('/api/Eliminapersonaje', clasepersonaje.Eliminar);
 	app.post('/api/seleccionartodos', clasepersonaje.Seleccionartodos);
 	app.post('/api/seleccionarporid', clasepersonaje.Seleccionarporid);
 	app.post('/api/seleccionarpornombre', clasepersonaje.Seleccionarpornombre);

 	var claseobjeto = new controllerobjeto();
 	app.post('/api/guardarobjeto',claseobjeto.Guardar);
 	app.post('/api/modificarobjeto', claseobjeto.Modificar);
 	app.post('/api/Eliminarobjeto', claseobjeto.Eliminar);
 	app.post('/api/seleccionartodosobj', claseobjeto.Seleccionartodos);
 	app.post('/api/seleccionarporidobj', claseobjeto.Seleccionarporid);
 	app.post('/api/seleccionarpornombreobj', claseobjeto.Seleccionarpornombre);

 	var claseescenario = new controllerescenario();
 	app.post('/api/guardarescenario',claseescenario.Guardar);
 	app.post('/api/modificarescenario', claseescenario.Modificar);
 	app.post('/api/Eliminarescenario', claseescenario.Eliminar);
 	app.post('/api/seleccionartodosesc', claseescenario.Seleccionartodos);
 	app.post('/api/seleccionarporidesc', claseescenario.Seleccionarporid);
 	app.post('/api/seleccionarpornombreesc', claseescenario.Seleccionarpornombre);

	var claseadministrador = new controlleradministrador();
 	app.post('/api/nuevoadministrador', claseadministrador.Guardar);
	app.post('/api/Login', claseadministrador.Login); 	
 	



 	app.get('*', function(req,res) {//localhost:8080
 	res.sendfile('./login.html'); //Carga única de la vista
 	});
 
 };