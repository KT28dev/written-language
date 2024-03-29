const seedrandom = require('seedrandom');

// This function is a stand-in for transforming a string into an Arelith language.
// Its purpose is simply to make the word unintelligible (by reversing it) for the purpose of this demo.
const jumbleWord = (word) => {
  let tail = '';
  let head = word;

  if (word.endsWith("?") || word.endsWith(",") || word.endsWith(".")) {
    head = word.slice(0, word.length - 1);
    tail = word.slice(word.length - 1)
  }

  if (startsWithCapital(head)) {
    head = lowercaseFirstLetter(capitalizeLastLetter(head));
  }

  return head.split("").reverse().join("") + tail;
}

// String manipulation helper functions
const startsWithCapital = (word) => word.charAt(0) === word.charAt(0).toUpperCase();
const capitalizeLastLetter = (string) => string.slice(0, string.length - 1) + string.charAt(string.length - 1).toUpperCase();
const lowercaseFirstLetter = (string) => string.charAt(0).toLowerCase() + string.slice(1);

const translateText = (text, characterId, fluency) => {
  const words = text.split(" ");
  // Randomization seed is generated from the characterId and the note's text.
  // This ensures the same PC will understand the same random sequence of words each time they attempt to read.
  // Seed uses the text of the note itself (or in the future, a hash generated from the text) to ensure the PC understands a different random sequence of words for each unique note.

  const translatedWords = words.map((word) => {
    const rng = seedrandom(`${characterId}-${word}`);
    const randomNumber = rng() * 100;

    return randomNumber > fluency ? jumbleWord(word) : word;
  })

  return translatedWords.join(" ");
}

module.exports = { jumbleWord, translateText };