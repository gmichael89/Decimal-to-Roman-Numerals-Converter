import generate from '../../src/generate'

var chai = require('chai')
var expect = chai.expect

describe('generate Result', () => {
  it('The number 1 should convert to I.', () => {
    expect(generate(1)).to.equal('I')
  })

  it('The number 5 should convert to V.', () => {
    expect(generate(5)).to.equal('V')
  })

  it('The number 10 should convert to X.', () => {
    expect(generate(10)).to.equal('X')
  })

  it('The number 20 should convert to XX.', () => {
    expect(generate(20)).to.equal('XX')
  })

  it('The number 3999 should convert to MMMCMXCIX.', () => {
    expect(generate(3999)).to.equal('MMMCMXCIX')
  })

  it('The number 456 should convert to CDLVI.', () => {
    expect(generate(456)).to.equal('CDLVI')
  })
})
