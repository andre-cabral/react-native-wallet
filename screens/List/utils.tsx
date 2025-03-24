export const fetchCards = (sendJsonToState: Function) => {
  fetch('http://192.168.0.185:3000/cards/')
  .then(response => {
    return response.json();
  })
  .then(json => {
    sendJsonToState(json);
  })
  .catch(error => {
    console.log({error});
  });

}
