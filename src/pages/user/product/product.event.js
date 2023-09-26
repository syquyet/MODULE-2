import { ProductService } from "./product.service.js";

window.onloadProducts = function () {
  const productService = new ProductService();
  const productsDB = productService.renderProducts();
  console.log(111,productsDB);
  
};
onloadProducts();
