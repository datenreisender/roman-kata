function roman(s) {
	var DIGITS = [
		['IV', 5-1],
		['IX', 10-1],
		['XL', 50-10],
		['XC', 100-10],
		['CD', 500-100],
		['CM', 1000-100],
		
		['M', 1000],
		['D', 500],
		['C', 100],
		['L', 50],
		['X', 10],
		['V', 5],
		['I', 1]
	];
	
	var sum = 0;	
	var i;
	for (i = 0; i<DIGITS.length; i++) {
		var roman = DIGITS[i][0];
		var value = DIGITS[i][1];
		
		while (s.match(roman)) {
			s = s.replace(roman, "");
			sum += value;
		}
	}
	
	return sum;
}