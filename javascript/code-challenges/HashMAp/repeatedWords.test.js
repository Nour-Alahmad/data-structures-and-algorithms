// import HashMap from "./hashMap.test.mjs";
//
const HashMap = require('./hashMap.test.js');
function repeatedWord(input) {

  const words = input.toLowerCase().split(/\W+/);
  const hashMap = new HashMap(words.length);

  for (const word of words) {
    if (hashMap.has(word)) {
      return word;
    } else {
      hashMap.set(word, true);
    }
  }

  return "no repeated word";
}

const input = "a b c test d e f g h test i ";
const test = repeatedWord(input);
console.log(test);


//------------------------------------
describe('repeatedWord', () => {
  it('should return the first repeated word in a string', () => {
    const inputString = "this is a test to test the function for finding repeated words";
    expect(repeatedWord(inputString)).toBe('test');
  });

  it('should handle repeated words with different capitalization', () => {
    const inputString = "This is a Test to test the Function for finding repeated Words";
    expect(repeatedWord(inputString)).toBe('test');
  });

  it('should return "No repeated word found" for a string with no repeated words', () => {
    const inputString = "each word appears only once in this string";
    expect(repeatedWord(inputString)).toBe('no repeated word');
  });
});





