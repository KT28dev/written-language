const { jumbleWord } = require('../main')

var assert = require('assert');

describe('JumbleWord', () => {
  it('should reverse a word', () => {
    assert.equal(jumbleWord('apple'), 'elppa')
  })

  it('should leave commas at the end of the word', () => {
    assert.equal(jumbleWord('apple,'), 'elppa,')
  })

  it('should capitalize the first letter of the reversed word', () => {
    assert.equal(jumbleWord('Apple'), 'Elppa')
  })

  it('should capitalize the first letter of the reversed word and leave commas at the end of the word', () => {
    assert.equal(jumbleWord('Apple,'), 'Elppa,')
  })
})