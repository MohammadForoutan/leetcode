class Stack<T> {
  private list: T[] = [];

  push(x: T) {
    this.list.push(x);
  }

  private get length(): number {
    return this.list.length;
  }

  pop(): T {
    return this.list.splice(this.length - 1, 1)[0];
  }

  get() {
    return this.list;
  }

  get last() {
    return this.list[this.length - 1];
  }

  get secLast() {
    return this.list[this.length - 2];
  }
}

function calPoints(operations: string[]): number {
  const s = new Stack<number>();

  for (let i = 0; i < operations.length; i++) {
    if (!Number.isNaN(parseInt(operations[i]))) {
      s.push(parseInt(operations[i]));
    } else {
      if (operations[i] === "C") s.pop();
      else if (operations[i] === "D") s.push((s.last as number) * 2);
      else if (operations[i] === "+") s.push(s.last + s.secLast);
    }
  }

  return s.get().reduce((t, c) => t + c, 0);
}
