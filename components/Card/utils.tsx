export const hideCardNumbers = (number: string) => {
  if(number?.length > 18) {
    const numbersHide = `**** **** **** ${number[15]}${number[16]}${number[17]}${number[18]}`;
    return numbersHide;
  }
  return number;
}