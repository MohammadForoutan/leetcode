function addBinary(a: string, b: string): string {
  let result = "";
  let carry = 0;

  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; i--) {
    const bitA = parseInt(a[i]);
    const bitB = parseInt(b[i]);

    // calculate if bigger than 2 with xor
    const sum = bitA ^ bitB ^ carry;
    carry = (bitA & bitB) | (bitB & carry) | (bitA & carry);
    /**
        const sum = (parseInt(a, 10) + parseInt(b, 10) + parseInt(carry, 10)) % 2;
        const carry = Math.floor((parseInt(a, 10) + parseInt(b, 10) + parseInt(carry, 10)) / 2);
    */

    // add new sum to start of result in string
    result = sum.toString() + result;
  }

  // maybe one carry left
  if (carry) {
    result = carry.toString() + result;
  }

  return result;
}

export {}