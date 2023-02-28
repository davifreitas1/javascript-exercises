function maxMin(k, arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  console.log(arrSorted);
  const minimumNumbers = [];
  for (let index = 0; index < k; index++) {
    minimumNumbers.push(arrSorted[index]);
  }
  return Math.max(...minimumNumbers) - Math.min(...minimumNumbers);
}

console.log(maxMin(4, [1,2,3,4,10,20,30,40,100,200]));