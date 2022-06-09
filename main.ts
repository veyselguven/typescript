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
// stringarray
let myArray: string[];
myArray = ["a", "b", "c"];
//number array
let myArray2: number[];
myArray2 = [2, 3, 4];
//ikisinide ayni sekilde kullanmak istersek

let numberString: any[];
numberString = ["afa", 2, "naber", false];
//enum siralama demek
enum Color {
  Purple,
  Black,
  Blue,
  Red,
}

let bgColor = Color.Blue;
bgColor = Color.Black;

//Tuple
// aslinda bir belirli size da array iniz varsa
// ve bu arrayinizin icindeki elemanlarin tipleri belliyse buna
//tupple deniliyor

let error: [string, number]; // mesala burda 2 tane elaminin olucagi belliyse ve birinci
// elamani string ikinci elamani nunmber olmak zorunda ise bu sekilde yazabiliriz.
error = ["Not Found", 404];

//unknown

let a = true;

let veysel: any;
a = veysel; // burda a yi any e atayabilirim

let notSure: unknown;
//a=notSure // bunu atayamazsin error verir
// cunku burda a nin type i belli burda type i belli olan bir elemana
// unknown atanamaz
notSure = "Didem";
notSure = 44;
notSure = false;
notSure = ["asfa", "afa"];
notSure = ["agaf", 56];
