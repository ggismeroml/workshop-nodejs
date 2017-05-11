function square(width) {

	return {

		printArea: function() {
			console.log("Cuadrado de área " + (width * 2));
		}
	}

}

module.exports = square;