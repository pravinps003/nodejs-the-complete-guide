const person = {
  name: 'PS003',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

const hobbies = ['Sports', 'Cooking'];

const copiedPerson = { ...person };

console.log(copiedPerson);

const copiedHobbies = [...hobbies];

console.log(copiedHobbies);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
