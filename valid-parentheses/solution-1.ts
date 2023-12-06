// Don't support nested parentheses
// example ([])
// they should be in order (){}[]  
// close parenthesis should be next to open one

type TParentheses = {
  [k: string]: { close: number };
};
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;

  const parentheses: TParentheses = {
    "91": { close: 93 }, // [ ]
    "123": { close: 125 }, // { }
    "40": { close: 41 }, // ( )
  };

  let index = 0;
  while (index < s.length) {
    const openIndexCode = s.charCodeAt(index);
    const closeIndexCode = s.charCodeAt(index + 1);
    const isParenthesesMatch =
      closeIndexCode === parentheses[openIndexCode].close;

    if (!isParenthesesMatch) return false;
    index += 2;
  }

  return true;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
