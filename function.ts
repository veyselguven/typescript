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
const logUser2 = (firstName: string, lastName?: string) => {
  console.log(firstName + " " + lastName);
};

logUser2("Burhan");
