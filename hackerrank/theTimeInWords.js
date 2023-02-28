function timeToWords(h, m) {
  const numerosPorExtenso = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eightteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine"
  ];

  function verifyMarks(minute) {
    if (minute === 1) {
      return 'one minute';
    } else if (minute === 15) {
      return 'quarter';
    } else if (minute === 30) {
      return 'half';
    }
    return `${numerosPorExtenso[minute]} minutes`;
  }

  if (m <= 30) {
    const horaDeReferencia = numerosPorExtenso[h];
    if (m === 0) {
      return `${horaDeReferencia} o' clock`;
    }
    const contagem = verifyMarks(m);
    return `${contagem} past ${horaDeReferencia}`;
  }
  
  if (m > 30) {
    const horaDeReferencia = numerosPorExtenso[h + 1];
    const contagem = verifyMarks(60 - m);
    return `${contagem} to ${horaDeReferencia}`;
  }
}

console.log(timeToWords(6, 30));