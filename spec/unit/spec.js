
describe 'roman'
    it 'should compute single roman digits'
      roman("I").should.be 1
      roman("V").should.be 5
      roman("X").should.be 10
      roman("L").should.be 50
      roman("C").should.be 100
    end

	it 'should compute multi digit romans with the same digits'
		roman("II").should.be 2
		roman("XX").should.be 20
		roman("CCC").should.be 300
	end
	
	it 'should compute compute mixed digit romans'
		roman("VI").should.be 6
		roman("CCXVII").should.be 217
	end

	it 'should compute romans with subtractions'
		roman("IV").should.be 4
		roman("XIX").should.be 19
	end
end