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

//user2.age = 25;
user2.age = "Naber";

user2.role = "admin"; // ya admin olucak yada user olucak

/**
 * Custom Type
 *
 */
// type Color = {
//   name: string;
//   hex: string;
// };

type Color = {
  name: "black" | "white";
  hex: "#000" | "#fff";
};
let user3: {
  name: string;
  age: number | string; // burda union type
  role: "admin" | "user"; // burda literal type
  color: Color;
};
user3.color.name = "white"; // ya black ya white olucak
user3.color.hex = "#fff"; // ya "#000" yada  "#fff"

type user4 = {
  name: string;
  age: string;
  tarih: "20/06/202" | "09/10/2002";
  color: Color;
};

let newUser: user4;
newUser = {
  name: "Didem",
  age: "afa",
  tarih: "20/06/202",
  color: {
    name: "black",
    hex: "#fff",
  },
};
