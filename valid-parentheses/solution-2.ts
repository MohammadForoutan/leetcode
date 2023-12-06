class Stack {
  private items: string[];

  constructor() {
    this.items = [];
  }

  push(item: string) {
    this.items.push(item);
  }

  pop(): string | undefined {
    return this.items.pop();
  }

  peek(): string | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

function isValid(s: string): boolean {
  const temp = new Stack();
  const parentheses = { ")": "(", "]": "[", "}": "{" };
  for(let i=0; i< s.length; i++) {
    const curr = s[i];

    if(temp.isEmpty() || temp.peek() !== parentheses[curr]) {
        temp.push(curr);
    } else {
        temp.pop();
    }
  }

  return temp.isEmpty();
}



console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("({})"), true)
console.log(isValid("({(})"), false)

// prevent: Duplicate function implementation.ts(2393)
export {}