class Student1
{
    rollno : number;
    name :string;
    Data_Stucture : number;
    English : number;
    Math : number;
    sum : number;
    per:number;

    constructor(rollno,name,Data_Stucture,English,Math)
    {
        this.rollno=rollno;
        this.name=name;
        this.Data_Stucture=Data_Stucture;
        this.English=English;
        this.Math=Math;
    }
    calculate()
    {
      this.sum=this.Data_Stucture+this.English+this.Math;
      this.per=this.sum/3;
    }
    print()
    {
        console.log("Name : "+this.name+ "  Subjects Marks : "+this.Data_Stucture,this.English,this.Math+"  Your Percentage is "+this.per);
    }
}
const student=new Student1(22,"Suraj",66,76,60);
student.calculate();
student.print();