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
	
	var SUBTRACTORS = [
		'IV', 'IX', 'XC', 'CM', 'CD', 'XL', 
	]
	
	function occurencesInString(c, s) {
		var matches = s.match(new RegExp(c, 'g'));
		return matches === null ? 0 : matches.length;
	}
	
	var sum = 0;
	
	var i;
	for (i = 0; i<SUBTRACTORS.length; i++) {
		if (romanString.match(SUBTRACTORS[i])) {
			sum -= 2* DIGITS[SUBTRACTORS[i].charAt(0)];
		}
	}

	for (digit in DIGITS) {
		sum += occurencesInString(digit, romanString) * DIGITS[digit];
	}
	return sum;
}