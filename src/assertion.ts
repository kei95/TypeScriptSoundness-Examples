// cast this variable to number of array
const usersAge = "23" as never as number[];

// invoke map function which doesn't exist on string type
// it will crash on runtime
usersAge.map(() => {});
