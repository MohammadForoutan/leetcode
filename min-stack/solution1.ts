class MinStack {
  private min: number[] = [Infinity];
  private list: number[] = [];
  constructor() {}

  push(val: number): void {
    this.list.push(val);

    const minVal = Math.min(val, this.min[this.min.length - 1]);
    this.min.push(minVal);
  }

  pop(): void {
    this.list.pop();
    this.min.pop();
  }

  top(): number {
    return this.list[this.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }

  get length() {
    return this.list.length;
  }

  get last() {
    return this.last[this.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
