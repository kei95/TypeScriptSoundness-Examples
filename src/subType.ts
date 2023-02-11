interface Animal {
  kind: string;
}

interface Dog {
  kind: "Dog";
  bark: () => string;
}

interface Cat {
  kind: "Cat";
  meow: () => string;
}

const cat: Cat = {
  kind: "Cat",
  meow: () => {
    return `she meowed`;
  },
};

const dog: Dog = {
  kind: "Dog",
  bark: () => {
    return `she barked`;
  },
};

// function that accepts type Animal
function getPetKind(pet: Animal) {
  return pet.kind;
}

// you can invoke these functions just fine since they are structurally compatible
getPetKind(cat);
getPetKind(dog);
