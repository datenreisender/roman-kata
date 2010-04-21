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

	var SUBTRACTIONS = [
		'IV', 'IX', 'XL', 'XC', 'CD', 'CM'
	];

    var sum = 0

	for (var i=0; i < SUBTRACTIONS.length; i++) {
		var subtractionIV = SUBTRACTIONS[i];
		if (romanString.match(subtractionIV)) {
			sum -= 2 * DIGITS[subtractionIV.charAt(0)];
		};
	};
	
    for (var i = 0; i < romanString.length; i++) {
        sum += DIGITS[romanString.charAt(i)];
    };
    return sum;
}