var bicicleta = {
	color: 'Rojo',
	modelo: 'BMX',
	frenos: 'De disco',
	velocidadMaxima: '60km',

	cambiarColor: function(color_nuevo) {
		this.color = color_nuevo;
		console.log(this);
	}
}

bicicleta.cambiarColor("Azul");