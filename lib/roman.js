function roman(romanString) {
    var DIGITS = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }

	var SUBTRACTIONS = [ 'IV', 'IX', 'XL', 'XC', 'CD', 'CM' ];

    var sum = 0;
	
	for (s in SUBTRACTIONS) {
		var subtracion = SUBTRACTIONS[s]
		if (romanString.match(subtracion)) {
			sum -= 2 * DIGITS[subtracion.charAt(0)];
		}
	}

    for (var i = 0; i < romanString.length; i++) {
        sum += DIGITS[romanString.charAt(i)]
    }
    return sum;
}