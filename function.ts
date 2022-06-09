/**
 * Funtions
 * Default,Optional Params
 */

const add = (num1: number, num2: number) => {
  console.log(num1 + num2);
};
// const add = (num1: number, num2: number): number => {
//     console.log(num1 + num2);
//     return num1 + num2;
//   };

add(2, 3);

const logUser = (firstName: string, lastName: string) => {
  console.log(firstName + " " + lastName);
};

logUser("Veysel", "Basbaydar");

// optional params

const logUser2 = (firstName: string, lastName?: string) => {
  console.log(firstName + " " + lastName);
};

logUser2("Burhan");

// default params
const logUser3 = (firstName: string, lastName = "tarkocin") => {
  console.log(firstName + " " + lastName);
};

logUser3("veysel");
logUser3("veysel", "Guven");

// literal,union veya custom ozellikleri burdada kullanabiliriz

type Color = {
  name: string;
  hex: string;
};
const logUser4 = (color: Color) => {
  console.log(color);
};

logUser4({
  name: "black",
  hex: "#000",
});
