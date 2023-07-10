
const validateBrackets = (str) => {
  let stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(' || char === '[' || char === '{') {

      stack.push(char);

    } else if (char === ')' || char === ']' || char === '}') {

      if (!brackets[`${stack.pop()}`])
        return false;
    }
  }

  return stack.length === 0;
};

console.log(validateBrackets("}{((())()"));
console.log(validateBrackets("()[[Extra Characters]]}"));
console.log(validateBrackets("{[(})()]"));

