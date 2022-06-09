/**
 * Object type
 *
 */

let user: {
  name: string;
  age: number; // string;
  favoriteColor: string;
};

user = {
  name: "Didem",
  age: 25,
  favoriteColor: "purple",
};

//user.
/**
 * Union Type
 * (type1 | type2 |type3|.. |typeN)
 *Literaal type  kesin specific olarak tip verme
 *
 */

let user2: {
  name: string;
  age: number | string;
  role: "admin" | "user"; // burda literaltype
};

user2.age = 25;
user2.age = "Naber";

user2.role = "admin"; // ya admin olucak yada user olucak
