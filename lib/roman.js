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
	
	var SUBTRACTION = [
		'IV', 'IX', 'CM', 'CD', 'XC', 'XL'
	];
	
	var sum = 0;
	
	for (var i=0; i < SUBTRACTION.length; i++) {
		var subtraction = SUBTRACTION[i];
		if (romanString.match(subtraction)) {
			sum -= 2 * DIGITS[subtraction.charAt(0)];
		}
	};
	
	for (var i=0; i < romanString.length; i++) {
		sum += DIGITS[romanString.charAt(i)];
	};
	return sum;
}