class Product
{
    ProductCode : number;
    Name : number;
    Price : number;
    Discount : number;

    constructor(ProductCode,Name,Price)
    {
        this.ProductCode = ProductCode;
        this.Name = Name;
        this.Price = Price;
    }
    DiscountCal()
    {
       this.Discount = this.Price - (this.Price*(0.10));
    }
    Display()
    {
        console.log(this.Discount);
    }
}
const product = new Product(1,"Dell Laptop",40000);
product.DiscountCal();
product.Display();