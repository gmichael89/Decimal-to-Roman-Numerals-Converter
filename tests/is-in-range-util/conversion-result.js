import IsInRange from '../../src/utils/is-in-range'

var chai = require('chai')
var expect = chai.expect

describe('Range Checker Result', () => {
  it('The number 5 should be within the range of 1 and 10.', () => {
    expect(IsInRange(5, 1, 10)).to.be.true
  })

  it('The number 14 should be within the range of 1 and 10.', () => {
    expect(IsInRange(14, 1, 10)).to.be.false
  })
})
