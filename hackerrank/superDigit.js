function superDigit(n, k) {
  const string = n.toString();
  let result;
  
  if (n < 10) {
    return n;
  }
  
  if (k != undefined) {
    let newString = '';
    for (let index = 0; index < k; index++) {
      newString += string;
    }
    result = [...newString].reduce((accumulator, current) => parseInt(accumulator) + parseInt(current), 0);
  } else {
    result = [...string].reduce((accumulator, current) => parseInt(accumulator) + parseInt(current), 0);
  }

  return superDigit(result);
}

console.log(superDigit(9875, 2));