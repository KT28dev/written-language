const { translateText } = require('./translate')

const text = "Moradin, the Dwarffather, is the dwarven lawful good chief deity. He represent the dwarven strength and force of will. He inspires dwarven inventions, seeks to improve the dwarven and encourage their good nature, intelligence, and harmonious existence with other good races while battling their pride and isolationist tendencies.";
const characterId = 2;
const fluency = 90;

console.log(translateText(text, characterId, fluency));