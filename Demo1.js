// var message = "Hello typesript"; // a string message
// console.log(message);
// var emp = {id:1, name: "Suraj"};// emp is object 
// console.log(emp.name);
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.print = function (value) {
        console.log(value.a + " " + value.b);
    };
    return Test;
}());
var IData = { a: 10, b: 20 };
var t1 = new Test();
t1.print(IData);
