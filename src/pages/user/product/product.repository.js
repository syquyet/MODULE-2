import { getDataFormLocalStorage } from "../../../../utils/method.js";


export class ProductRepository {
  productsDB() {
    const productsDB = getDataFormLocalStorage("products");
    return productsDB;
  }
}
