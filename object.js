/**
 * Object type
 *
 */
var user;
user = {
    name: "Didem",
    age: 25,
    favoriteColor: "purple"
};
//user.
/**
 * Union Type
 * (type1 | type2 |type3|.. |typeN)
 *Literaal type  kesin specific olarak tip verme
 *
 */
var user2;
//user2.age = 25;
user2.age = "Naber";
user2.role = "admin"; // ya admin olucak yada user olucak
var user3;
user3.color.name = "white"; // ya black ya white olucak
user3.color.hex = "#fff"; // ya "#000" yada  "#fff"
var newUser;
newUser = {
    name: "Didem",
    age: "afa",
    tarih: "20/06/202",
    color: {
        name: "black",
        hex: "#fff"
    }
};
