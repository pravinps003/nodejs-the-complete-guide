const name = 'PS003';
let age = 29;
const hasHobbies = true;

/* Uncomment the below line and try it out */
// name = 'Pravin';
age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', of age ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
