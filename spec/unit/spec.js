describe 'roman()'
	var testcases = {
		I: 1,
		II: 2,
		III: 3
	}

	for (testcase in testcases) {
		JSpec.context = { input: testcase, expected: testcases[testcase] };

		it 'should '+testcase+' '+testcases[testcase]
		  roman(input).should.be expected
		end
	};


	it 'should compute single digit romans'
	  roman('I').should.be 1
	  roman('V').should.be 5
	  roman('X').should.be 10
	  roman('L').should.be 50
	  roman('C').should.be 100
	  roman('D').should.be 500
	  roman('M').should.be 1000
	end
	
	it 'should compute simple multi digit romans'
	  roman('II').should.be 2
	  roman('CX').should.be 110
	  roman('XVI').should.be 16
	end
	
	it 'should compute romans with subtractions'
	  roman('IV').should.be 4
	  roman('MCMXC').should.be 1990
	  roman('CDXLIV').should.be 444
	  roman('CMXCIX').should.be 999
	end
end