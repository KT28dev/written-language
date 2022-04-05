const { translateText } = require('./translate')

const text = "Moradin, the Dwarffather, is the dwarven lawful good chief deity. He represents the dwarven strength and force of will. He inspires dwarven inventions, seeks to improve the dwarven and encourage their good nature, intelligence, and harmonious existence with other good races while battling their pride and isolationist tendencies.";
const characterId = 1;
const fluency = 50;

console.log(translateText(text, characterId, fluency));