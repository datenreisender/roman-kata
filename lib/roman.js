
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
		'IV', 'CM', 'XC', 'IX', 'CD', 'XL'
	];
	
	var sum = 0;
	
	var s;
	for (s=0; s<SUBTRACTIONS.length;s++) {
		var subtraction = SUBTRACTIONS[s];
		if (romanString.match(subtraction)) {
			sum -= 2*DIGITS[subtraction.charAt(0)];
		}
	}
	
	var c;
	for (c=0; c<romanString.length; c++) {
		sum+= DIGITS[romanString.charAt(c)]
	}
	return sum;
}