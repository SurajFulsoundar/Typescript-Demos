var Employee1 = /** @class */ (function () {
    function Employee1(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee1.prototype.calculate = function () {
        this.hra = this.salary * 0.34;
        this.da = this.salary * 0.23;
        this.ta = this.salary * 0.12;
        this.pf = this.salary * 0.5;
        this.gross = (this.hra + this.da + this.ta + this.salary) - this.pf;
    };
    Employee1.prototype.print = function () {
        console.log(this.gross);
    };
    return Employee1;
}());
var employee = new Employee1(1, "Suraj", 65000);
employee.calculate();
employee.print();
