import IsInRange from '../../src/utils/is-in-range'

var chai = require('chai')
var expect = chai.expect

describe('Range Checker Format', () => {
  it('Should return `false` if no inputs are provided.', () => {
    expect(IsInRange()).to.be.false
  })

  it('Should return `false` if one of the input parameter is of type `object`.', () => {
    expect(IsInRange({}, 1, 10)).to.be.false
  })

  it('Should return `false` if input is a character.', () => {
    expect(IsInRange(15, 'abc', 100)).to.be.false
  })

  it('Should handle floating number input.', () => {
    expect(IsInRange(4.4, 1.5, 13.5)).to.be.true
  })
})
