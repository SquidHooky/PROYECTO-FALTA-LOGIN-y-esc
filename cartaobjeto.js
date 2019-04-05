var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cartaobjeto = new Schema({
	NOMBRE: String,
	CALIDAD: String,
	EFECTO: String,
	IMAGEN: String
});
module.exports = mongoose.model('CartaObjeto',cartaobjeto);