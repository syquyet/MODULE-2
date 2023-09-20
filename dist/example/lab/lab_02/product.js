"use strict";
class Product {
    constructor(id, name, price, quantity, url) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.id = id;
        this.url = url;
    }
    get info() {
        return {
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            id: this.id,
            url: this.url,
        };
    }
    set setName(name) {
        this.name = name;
    }
    set setPrice(price) {
        this.price = price;
    }
    set setQuantity(quantity) {
        this.quantity = quantity;
    }
}
class Bakery {
    constructor() {
        this.productList = [];
    }
    createProduct(data) {
        let id = 1;
        if (this.productList.length > 0) {
            id = this.productList[this.productList.length - 1].id + 1;
        }
        const newProduct = new Product(id, data.name, data.price, data.quantity, data.url);
        this.productList.push(newProduct);
    }
    showAllProduct() {
        const products = this.productList.map((product) => product.info);
        return products;
    }
    deleteProduct(id) {
        const newList = this.productList.filter((product) => product.id !== id);
        this.productList = newList;
    }
    updateProduct(data) {
        if (data?.id) {
            const product = this.productList.find((product) => product.id == data.id);
            const index = this.productList.findIndex((product) => product.id == data.id);
            const newProduct = { ...product?.info, ...data };
            const productAdd = new Product(newProduct.id, newProduct.name, newProduct.price, newProduct.quantity, newProduct.url);
            this.productList.splice(index, 1, productAdd);
        }
    }
    buyProduct(id) {
        const product = this.productList.find((prduct) => prduct.id == id);
        if (product === undefined) {
            alert("Sản phẩm không tồn tại");
            return;
        }
        if (product.info.quantity > 0) {
            product.setQuantity = product.info.quantity - 1;
            const newProduct = new Product(product.info.id, product.info.name, product.info.price, 1, product.info.url);
            return newProduct;
        }
        else {
            alert("Sản phẩm hết hàng");
        }
    }
    returnProduct(id, quantity) {
        const product = this.productList.find((prduct) => prduct.id == id);
        product.setQuantity = product.info.quantity + quantity;
    }
}
const store = new Bakery();
store.createProduct({
    name: "Bánh trung thu",
    price: 70000,
    quantity: 50,
    url: "https://th.bing.com/th?id=OIP.dBVZPCpUTmtLRqgRPBNK1gHaEz&w=310&h=201&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
});
store.createProduct({
    name: "Bánh bao",
    price: 15000,
    quantity: 20,
    url: "https://th.bing.com/th/id/OIP.DLBZrif5kkVMWntP0itHIgHaE7?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
});
store.createProduct({
    name: "Bánh mì",
    price: 30000,
    quantity: 200,
    url: "https://th.bing.com/th/id/OIP.IxSQxenayDYM2oZcHwj7PgHaEo?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
});
store.createProduct({
    name: "Bánh bông lan ",
    price: 20000,
    quantity: 200,
    url: "https://th.bing.com/th/id/OIP.w9q8f5O0bC4wQdnKhwYzFgHaE8?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
});
store.createProduct({
    name: "Bánh bông lan ",
    price: 25000,
    quantity: 200,
    url: "https://th.bing.com/th/id/OIP.w9q8f5O0bC4wQdnKhwYzFgHaE8?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
});
console.log(store.showAllProduct());
class MyCart {
    constructor() {
        this.myCart = [];
    }
    buyProductCart(id) {
        const product = store.buyProduct(id);
        if (!product) {
            return;
        }
        const productCart = this.myCart.find((productInCart) => productInCart.id === product.id);
        if (productCart) {
            productCart.setQuantity = productCart.info.quantity + 1;
        }
        else {
            this.myCart.push(product);
        }
    }
    showAllCart() {
        const products = this.myCart.map((product) => product.info);
        return products;
    }
    deleteCart(id) {
        this.myCart.forEach((product, index) => {
            if (product.info.id === id) {
                this.myCart.splice(index, 1);
                store.returnProduct(id, product.info.quantity);
            }
        });
    }
    updateCart(id, quantity) {
        this.myCart.forEach((product) => {
            if (product.info.id === id) {
                product.setQuantity = product.info.quantity + quantity;
                store.returnProduct(id, -quantity);
                console.log(333, product.info.quantity);
            }
        });
    }
}
const user_1 = new MyCart();
console.log(111, user_1.showAllCart());
console.log(2222, store.showAllProduct());
const productElement = document.querySelector(".album");
console.log(121232, productElement);
function renderProduct(products) {
    console.log(4444, products);
    let content = "";
    for (const product of products) {
        content += `<div class="card">
  <div class="img">
    <img
      src="${product.url}"
      alt=""
      width="100%"
      height="100%"
    />
  </div>
  <div class="card-content">
    <h1>${product.name}</h1>
    <p>GIá: ${product.price.toLocaleString()}VND</p>
  </div>
</div>`;
    }
    productElement.innerHTML = content;
}
renderProduct(store.showAllProduct());
