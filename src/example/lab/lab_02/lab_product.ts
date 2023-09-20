// class Product {
//   public id: number;
//   private name: string;
//   private price: number;
//   private quantity: number;
//   constructor(id: number, name: string, price: number, quantity: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
//   get getId(): number {
//     return this.id;
//   }
//   getName(): string {
//     return this.name;
//   }
//   getPrice(): number {
//     return this.price;
//   }
//   getQuantity(): number {
//     return this.quantity;
//   }
//   setId(id: number) {
//     this.id = id;
//   }
//   setName(name: string) {
//     this.name = name;
//   }

//   setPrice(price: number) {
//     this.price = price;
//   }
//   setQuantity(quantity: number) {
//     this.quantity = quantity;
//   }
//   inputData() {
//     const id = Number(prompt("nhập ID "));
//     const name = prompt("nhập TÊN");
//     const price = Number(prompt("nhập GIÁ"));
//     const quantity = Number(prompt("nhập SỐ LƯỢNG"));
//     if (id) {
//       this.id = id;
//     }
//     if (name) {
//       this.name = name;
//     }
//     if (price) {
//       this.price = price;
//     }
//     if (quantity) {
//       this.quantity = quantity;
//     }
//   }
//   displayData(): { id: number; name: string; price: number; quantity: number } {
//     return {
//       id: this.id,
//       name: this.name,
//       price: this.price,
//       quantity: this.quantity,
//     };
//   }
// }
// const product_1 = new Product(1, "chocolate", 10000, 5);
// console.log("sản phẩm", product_1.displayData());

// class Bakery {
//   private products: Product[] = [];
 
//   createProduct(data: { name: string; price: number; quantity: number }) {
//     let id: number = 1;
//     if (this.products.length > 0) {
//       id = this.products[this.getLenght - 1].id + 1;
//       const newProduct = new Product(id, data.name, data.price, data.quantity);
//       this.products.push(newProduct);
//     }
//   }
//   get getLenght() {
//     return this.products.length;
//   }
//   showAllProduct() {
//     const products=this.products.map(product=>product.displayData())
//     return products
//     }
  
//   deleteProduct(id: number) {
//     const index = this.products.findIndex((product) => product.getId === id);
//     this.products.splice(index, 1);
//   }
//   updateProduct(id: number) {
//     const index = this.products.findIndex((product) => product.getId === id);
//     const product = this.products[index];
//     product.inputData();
//     this.products.splice(index, 1, product);
//   }
// }

// const bakery_1 = new Bakery();
// // bakery_1.createProduct();
// bakery_1.showAllProduct();

// class Cart {
//   private productCarts: Product[] = [];

//   addToCart(id: string, quantity: string) {}
// }
