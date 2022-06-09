/**
 * interfaces
 *
 *
 */

interface Employee {
  readonly empCode: number;
  name: string;
  age?: number;
  // getSalary: () => number; // burda sadece aldigi parametre ve dondurdugu numra
}

let newEmplooye: Employee;

newEmplooye = {
  name: "veysel",
  //age: 45,
  empCode: 34,
};

//newEmplooye.empCode = 243; // bunu yapamazsin cunku readOnly

newEmplooye.name = "safdsg";
