const person: {
  name: string;
  age: number;
  surname: string;
  address: { city: string; street: string };
} = {
  name: "Vladilen",
  age: 29,
  surname: "Minin",
  address: {
    city: "Moskow",
    street: "Lenina",
  },
};

function fullname(obj: { name: string; surname: string }): string {
  return obj.name + " " + obj.surname;
}

console.log(fullname(person));
