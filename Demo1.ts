// var message = "Hello typesript"; // a string message
// console.log(message);
// var emp = {id:1, name: "Suraj"};// emp is object 
// console.log(emp.name);

// class Date1 {
//     day:Number;
//     month:string;
//     year:Number;
//     constructor(day,month,year)
//     {
//        this.day;
//        this.month;
//        this.year;
//     }
//     Print()
//     {
//       console.log(this.day+"/"+this.month+"/"+this.year);
//     }
// }
// const d =new Date1(23,"Nov",2023);
// d.Print();



interface IData
{
   a:Number;
   b:Number;
}

class Test
{
  print(value:IData)
  {
    console.log(value.a+" "+value.b);
  }
}

const IData={a:10,b:20};

const t1=new Test();
t1.print(IData);





