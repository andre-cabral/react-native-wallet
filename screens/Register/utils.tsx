import { Card } from "../../types"

export const registerValidate = ({
  number,
  name,
  dueDate,
  cvv,
} : Card) => {
  const numberOk = registerValidateNumber(number);
  const nameOk = registerValidateName(name);
  const dueDateOk = registerValidateDueDate(dueDate);
  const cvvOk = registerValidateCvv(cvv);

  return numberOk && nameOk && dueDateOk && cvvOk;
}

export const registerValidateNumber = (number: string) => {
  return /\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d/.test(number);
}

export const registerValidateName = (name: string) => {
  return /.* ..*/.test(name);
}

export const registerValidateDueDate = (dueDate: string) => {
  return /[0-1]\d\/\d\d/.test(dueDate);
}

export const registerValidateCvv = (cvv: string) => {
  return /\d\d\d/.test(cvv);
}