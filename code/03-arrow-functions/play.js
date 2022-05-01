const name = 'PS003';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', of age ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
};
console.log(summarizeUser(name, age, hasHobbies));

/* Uncomment the below lines and try out different ways of writing arrow functions */
/* 
const add = (a, b) => a + b;
console.log(add(1, 2));

const addOne = (a) => a + 1;
console.log(addOne(2));

const addRandom = () => 1 + 2;
console.log(addRandom());
 */
