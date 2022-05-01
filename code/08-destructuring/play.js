const person = {
  name: 'PS003',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

/* 
const printName = (personData) => {
  console.log(personData.name);
};
*/
/* Below code gives similar output as above commented code */
const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;

console.log(name, age);

const hobbies = ['Sports', 'Cooking'];

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);
