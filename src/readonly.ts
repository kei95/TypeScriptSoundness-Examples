type Person = {
  name: string;
  age: number;
};

//{
// name: readonly string,
// age: readonly number,
// }
const Keanu: Readonly<Person> = {
  name: "John Wick",
  age: 58,
};

// complains - it's readonly
// Keanu.name = "Jerry";

// function to override the given Person with second argument
function changeIdentity(person: Person, mutateTo: Person) {
  person.name = mutateTo.name;
  person.age = mutateTo.age;
}

// you can invoke this function safely despite that Keanu is readonly type
changeIdentity(Keanu, { name: "Neo", age: 33 });

console.log(Keanu);
