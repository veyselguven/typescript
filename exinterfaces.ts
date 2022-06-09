/**
 * Extending interfaces
 *
 *
 */

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  readonly empCode: number;
}

let newEmplooye: Employee;

newEmplooye = {
  name: "Didem",
  age: 33,
  empCode: 222,
};
