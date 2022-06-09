/**
 * @typeAnnotations :type
 *  Any
 *  Number
 *  String
 *  Boolen
 *  Arrays string[],number[],any[]
 *  Enum
 *  Tuple [type1,type2]
 *  Unknown
 *  TYPE INFERENCE
 */
// ne kadar hata mesajida gorseniz bu ts dosyasinin compile olmasini engellemiyor
//stactic Typing
// let x = "Didem";
// x = 5; // error
//any normalde aykiri
// let x;
// x = "didem";
// x.   // gelmez string methotlari
// type annotation
// let x: string;
// x = "didem";
// x.   // burda gelir methodlar
// type inference
// let x: string = "Didem";
// let age: number = 50;
//boolen
// let a: boolean;
// a = false;
//myArray
var myArray;
myArray = ["a", "b", "c"];
