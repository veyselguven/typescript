/**
 *
 * Implementing Interfaces
 *
 */

interface IEmployee {
  empCode: number;
  name: string;
  age: number;
  getSalary: (number) => number;
}

class Employee implements IEmployee {
  empCode: number;
  name: string;
  age: number;

  constructor(empCode: number, name: string, age: number) {}
  getSalary = (empCode: number) => {
    return 10000;
  };
}

let newEmployee = new Employee(15, "veysel", 23);

console.log(newEmployee);
