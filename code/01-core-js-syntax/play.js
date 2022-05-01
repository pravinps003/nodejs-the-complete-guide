var name = 'PS003';
var age = 29;
var hasHobbies = true;

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
