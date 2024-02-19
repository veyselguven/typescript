/**
 *
 * Implementing Interfaces
 *
 */
var Employee = /** @class */ (function () {
    function Employee(empCode, name, age) {
        this.getSalary = function (empCode) {
            return 10000;
        };
    }
    return Employee;
}());
var newEmployee = new Employee(15, "veysel", 23);
console.log(newEmployee);
