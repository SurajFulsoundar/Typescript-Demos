class Employee1
{
    id :number;
    name :string;
    salary :any;
    hra :number;
    da:number;
    ta:number;
    pf:number;
    gross:number;
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;       
    }
    calculate()
    {
        this.hra=this.salary*0.34;
        this.da=this.salary*0.23;
        this.ta=this.salary*0.12;
        this.pf=this.salary*0.5;
        this.gross=(this.hra+this.da+this.ta+this.salary)-this.pf;
    }
    print()
    {
        console.log(this.gross);
    }

}
const employee =new Employee1(1,"Suraj",65000);
employee.calculate();
employee.print();