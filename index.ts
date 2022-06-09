/**
 * Type Assertions ?
 * Typescript kapa ceneni; ben ne yaptigimi bilmiyorum
 */

let message;

message = "didem";

// iki yontemlede kullaniliyor.bunlari yaparsak.
const newMessage = (<string>message).toUpperCase();
const newnewMessage = (message as string).toLowerCase();

let alex;
alex = "Naber";

const print1 = (<string>alex).toUpperCase();

console.log(print1);
