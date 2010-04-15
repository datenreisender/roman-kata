function roman(romanString) {
    var ROMAN_DIGITS = {
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }

	function countOccurences(regexp) {
		return romanString.match(digitAsRegexp) ? romanString.match(digitAsRegexp).length : 0;	
	}

	var sum = 0;
	
	var subtraction;
	var SUBTRACTIONS = {"IX":null, "IV":null};
	for (subtraction in SUBTRACTIONS) {
		if (romanString.match(subtraction)) {
			sum = -ROMAN_DIGITS['I'] *2;
		}
	}
	
	var digit;
	for (digit in ROMAN_DIGITS) {
		var digitAsRegexp = new RegExp(digit, 'g');	
		if (countOccurences(digitAsRegexp) > 0) {
			sum += ROMAN_DIGITS[digit] * countOccurences(digitAsRegexp);
		}
	}
	return sum;
}