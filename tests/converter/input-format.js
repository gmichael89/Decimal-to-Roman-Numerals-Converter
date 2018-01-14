import generate from '../../src/generate'

var chai = require('chai')
var expect = chai.expect

describe('generate Input Format', () => {

    it('Should handle input of type String.', () => {
        expect(generate('5')).to.equal('V')
    })

    it('Should return `false` if input is of type `object`.', () => {
        expect(generate({})).to.be.false
    })

    it('Should return `false` if there is no input.', () => {
        expect(generate()).to.be.false
    })

    it('Should return `false` if input is a character.', () => {
        expect(generate('abc')).to.be.false
    })

    it('Should return `false` if input is a number less than 1.', () => {
        expect(generate(-1)).to.be.false
    })

    it('Should return `false` if number is greater than 3999.', () => {
        expect(generate(4000)).to.be.false
    })

    it('Should convert the floating number 4.4 to an integer and return IV.', () => {
        expect(generate(4.4)).to.equal('IV')
    })

})
