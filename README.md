# written-language

## Setup
1. Install node version 10.19.0 for your system
1. `npm install`

## Running the script
1. `node main.js`

Example with 50% fluency:

```
$ node main.js

Moradin, eht Rehtaffrawd, is eht dwarven lufwal doog chief deity. Eh represent the dwarven htgnerts dna force of lliw. Eh seripsni dwarven inventions, skees ot evorpmi eht dwarven dna encourage their doog erutan, ecnegilletni, dna suoinomrah ecnetsixe with rehto good secar while battling rieht pride and isolationist tendencies.

```

## Running tests
1. `npm test`

```
$ npm test

> written-language@1.0.0 test /home/kt28/workspace/written-language
> mocha



  translateText
    full fluency
      ✔ should not jumble any words
    partial fluency
      ✔ should jumble some of the words
      ✔ should jumble different words for different characters
      ✔ translates additional words as fluency increases and there is no regression of comprehension
    zero fluency
      ✔ should jumble all words

  jumbleWord
    ✔ should reverse a word
    ✔ should leave commas at the end of the word
    ✔ should capitalize the first letter of the reversed word
    ✔ should capitalize the first letter of the reversed word and leave commas at the end of the word


  9 passing (9ms)
```