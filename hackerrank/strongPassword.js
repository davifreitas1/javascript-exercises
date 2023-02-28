function passwordCheck(n, password) {
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  let digitsCounter = 0;
  let check = {
    numbersCheck: false,
    lowerCaseCheck: false,
    upperCaseCheck: false,
    specialCharactersCheck: false,
  };

  if (n < 6) {
    digitsCounter = (6 - n);
  }

  const arr = [...password];
  arr.forEach((digit) => {
    if (numbers.includes(digit)) {
      check.numbersCheck = true;
    }
    if (lower_case.includes(digit)) {
      check.lowerCaseCheck = true;
    }
    if (upper_case.includes(digit)) {
      check.upperCaseCheck = true;
    }
    if (special_characters.includes(digit)) {
      check.specialCharactersCheck = true;
    }
  });

  const result = Object.values(check).filter((e) => e === false).length;

  return Math.max(digitsCounter, result);
}

console.log(passwordCheck(3, 'Ab1'));