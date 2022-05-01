const hobbies = ['Sports', 'Cooking'];

console.log(hobbies);

for (let hobby of hobbies) {
  console.log(hobby);
}

/* Try out different array methods like the one below */
console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
