/**
 * Funtions
 * Default,Optional Params
 */
var add = function (num1, num2) {
    console.log(num1 + num2);
};
// const add = (num1: number, num2: number): number => {
//     console.log(num1 + num2);
//     return num1 + num2;
//   };
add(2, 3);
var logUser = function (firstName, lastName) {
    console.log(firstName + " " + lastName);
};
logUser("Veysel", "Basbaydar");
// optional params
var logUser2 = function (firstName, lastName) {
    console.log(firstName + " " + lastName);
};
logUser2("Burhan");
// default params
var logUser3 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "tarkocin"; }
    console.log(firstName + " " + lastName);
};
logUser3("veysel");
logUser3("veysel", "Guven");
var logUser4 = function (color) {
    console.log(color);
};
logUser4({
    name: "black",
    hex: "#000"
});
