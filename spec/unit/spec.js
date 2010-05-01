describe 'roman()'
	it 'computes single digits'
		roman('I').should.be 1
		roman('V').should.be 5
		roman('X').should.be 10
		roman('L').should.be 50
		roman('C').should.be 100
		roman('D').should.be 500
		roman('M').should.be 1000
	end
	
	it 'computes additive digits'
		roman('VI').should.be 6
		roman('CX').should.be 110
		roman('XVI').should.be 16
	end
	
	it 'computes subtractive digits'
		roman('XL').should.be 40
		roman('XLI').should.be 41
		roman('IV').should.be 4
		roman('CDXLIV').should.be 444
		roman('CMXCIX').should.be 999
	end
	
	it 'computes any meaningless number of year'
		roman('MCMLXXII').should.be 1972
	end
end