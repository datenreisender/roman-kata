
describe 'roman()'
	it 'computes one digit romans'
		roman("I").should.be 1
		roman("V").should.be 5
		roman("X").should.be 10
		roman("L").should.be 50
		roman("C").should.be 100
		roman("D").should.be 500
		roman("M").should.be 1000
	end
	
	it 'computes simple multi digit romans'
		roman("II").should.be 2
		roman("CCX").should.be 210
	end

	it 'computes multi digit romans including substractions'
		roman("IV").should.be 4
		roman("XIX").should.be 19
		roman("XL").should.be 40
		roman("XC").should.be 90
		roman("CD").should.be 400
		roman("CM").should.be 900
	end
	
	it 'computes my birthyear and then I\'m done'
		roman("MCMLXXII").should.be 1972
	end
end