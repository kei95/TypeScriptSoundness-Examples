interface Animal {
  kind: string;
}

interface Dog extends Animal {
  kind: "Dog";
  bark: () => string;
}

interface Cat extends Animal {
  kind: "Cat";
  meow: () => string;
}

const kitty: Cat = {
  kind: "Cat",
  meow: () => "meow",
};

const puppy: Dog = {
  kind: "Dog",
  bark: () => "bark",
};

// Create an array contains only Dog type.
const dogs: Dog[] = [puppy, puppy]; // [puppy, puppy];

// but dogs is implicitly assignable to animal array.
const animals: Animal[] = dogs;

// And it's possible to mutate the array via animals
animals.push(kitty);

// dogs no longer have only Dog in the array! - It results in runtime error
dogs.forEach((dog) => dog.bark());
