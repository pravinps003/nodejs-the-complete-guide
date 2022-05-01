const name = 'PS003';
let age = 29;
const hasHobbies = true;

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
