function plusOne(digits: number[]): number[] {
  return (BigInt(digits.join("")) + 1n).toString().split("").map(Number);
}

console.log(plusOne([9, 9])); // [1,2,1,0]
