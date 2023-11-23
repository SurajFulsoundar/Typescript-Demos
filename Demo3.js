var Student1 = /** @class */ (function () {
    function Student1(rollno, name, Data_Stucture, English, Math) {
        this.rollno = rollno;
        this.name = name;
        this.Data_Stucture = Data_Stucture;
        this.English = English;
        this.Math = Math;
    }
    Student1.prototype.calculate = function () {
        this.sum = this.Data_Stucture + this.English + this.Math;
        this.per = this.sum / 3;
    };
    Student1.prototype.print = function () {
        console.log("Name : " + this.name + "  Subjects : " + this.Data_Stucture, this.English, this.Math + "  Your Percentage is " + this.per);
    };
    return Student1;
}());
var student = new Student1(22, "Suraj", 66, 76, 60);
student.calculate();
student.print();
