var Product = /** @class */ (function () {
    function Product(ProductCode, Name, Price) {
        this.ProductCode = ProductCode;
        this.Name = Name;
        this.Price = Price;
    }
    Product.prototype.DiscountCal = function () {
        this.Discount = this.Price - (this.Price * (0.10));
    };
    Product.prototype.Display = function () {
        console.log(this.Discount);
    };
    return Product;
}());
var product = new Product(1, "Dell Laptop", 40000);
product.DiscountCal();
product.Display();
