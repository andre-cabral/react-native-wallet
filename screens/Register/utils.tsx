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

export const postRegister = ({
  number,
  name,
  dueDate,
  cvv,
  fetchDone,
  fetchFailed,
}: any) => {
  
  fetch('http://192.168.0.185:3000/cards/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      number,
      name,
      dueDate,
      cvv,
    }),
  })
  .then(response => {
    if(response.ok){
      fetchDone();
    }
  })
  .catch(error => {
    console.log({error});
  });

}
