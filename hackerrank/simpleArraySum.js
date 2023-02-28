const array = 6;
const array2 = [1, 2, 3, 4, 5];

function somarArray(ar) {
  if (typeof ar === 'number') {
    return ar;
  }
  const soma = ar.reduce((acumulator, current) => acumulator + current, 0)
  return soma;
}

console.log(somarArray(array));
console.log(somarArray(array2));