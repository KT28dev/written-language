const { jumbleWord, translateText } = require('../translate')

var assert = require('assert');

describe('translateText', () => {
  const text = "Moradin, the Dwarffather, is the dwarven lawful good chief deity.";
  describe('full fluency', () => {
    it('should not jumble any words', () => {
      assert.equal(translateText(text, 1, 100), text)
    })
  })

  describe('partial fluency', () => {
    it('should jumble some of the words', () => {
      assert.equal(translateText(text, 1, 50), "Moradin, eht Dwarffather, si the dwarven lawful good feihc deity.")
    })

    it('should jumble different words for different characters', () => {
      const translateForCharacter = (characterId) => translateText(text, characterId, 50);

      assert.notEqual(translateForCharacter(1), translateForCharacter(2))
    })

    it('translates additional words as fluency increases and there is no regression of comprehension', () => {
      const translateForFluency = (fluency) => translateText(text, 1, fluency);

      assert.equal(translateForFluency(10), "Nidarom, eht Rehtaffrawd, si the dwarven lufwal doog feihc ytied.")
      assert.equal(translateForFluency(20), "Moradin, eht Rehtaffrawd, si the dwarven lawful doog feihc ytied.")
      assert.equal(translateForFluency(40), "Moradin, eht Dwarffather, si the dwarven lawful good feihc deity.")
      assert.equal(translateForFluency(60), "Moradin, the Dwarffather, si the dwarven lawful good feihc deity.")
      assert.equal(translateForFluency(80), "Moradin, the Dwarffather, is the dwarven lawful good chief deity.")
    })
  })

  describe('zero fluency', () => {
    it('should jumble all words', () => {
      assert.equal(translateText(text, 1, 0), "Nidarom, eht Rehtaffrawd, si eht nevrawd lufwal doog feihc ytied.")
    })
  })
})

describe('jumbleWord', () => {
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