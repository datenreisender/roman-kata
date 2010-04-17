describe 'roman()' 
	it 'should compute single digit romans'
		roman("I").should.be 1
		roman("V").should.be 5
		roman("X").should.be 10
		roman("L").should.be 50
		roman("C").should.be 100
		roman("D").should.be 500
		roman("M").should.be 1000
	end
	
	it 'should compute multi digit romans with the same digit'
	 	roman("II").should.be 2
		roman("XXX").should.be 30
	end
	
	it 'should compute multi digit romans with mixed digits'
		roman("VI").should.be 6
		roman("XXIII").should.be 23
	end
	
	it 'should compute all subtractions'
		roman("IV").should.be 4
		roman("MCMXC").should.be 1990
		roman("CMXCIX").should.be 999
		roman("CDXLIV").should.be 444
	end
	
	it 'should compute some meaningless year'
		roman("MCMLXXII").should.be 1972
	end
	 
end