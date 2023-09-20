class Car {
  private brand: string;
  private price: number;
  private name: string;
  private color: string;
  private catagory: string;
  constructor(
    brand: string,
    price: number,
    name: string,
    color: string,
    catagory: string
  ) {
    this.brand = brand;
    this.price = price;
    this.name = name;
    this.color = color;
    this.catagory = catagory;
  }
  setName(name: string) {
    this.name = name;
  }
  setPrice(price: number) {
    this.price = price;
  }
  setColor(color: string) {
    this.color = color;
  }
  setBrand(brand: string) {
    this.brand = brand;
  }
  setCatagory(catagory: string) {
    this.catagory = catagory;
  }
  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price ;
  }
  getColor() :string{
    return this.color;
  }
  getBrand():string {
    return this.brand ;
  }
  getCatagory():string {
    return this.catagory;
  }
  inputData() {
    const name = prompt("nhập tên xe ",this.name);
    const price =Number(prompt("nhập giá xe ",this.price.toString()));
    const brand = prompt("nhập hãng xe ");
    const color = prompt("nhập màu  xe ");
    const catagory = prompt("nhập loại xe ");
    if (name) {
        this.name=name
        
    }
    if (price) {
        this.price=price;
        
    }
    if (brand) {
        this.brand=brand
        
    }
    if (color) {
        this.color=color
        
    }
    if (catagory) {
        this.catagory=catagory
        
    }
  }
}
