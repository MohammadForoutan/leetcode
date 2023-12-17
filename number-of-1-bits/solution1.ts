function hammingWeight(n: number): number {
  return (n >>> 0) // unsigned shift
    .toString(2)
    .split("")
    .reduce(
      (total: number, current: string) => (current == "0" ? total : total + 1),
      0
    );
}
