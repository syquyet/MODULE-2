import { ProductRepository } from "./product.repository.js";

export class ProductService {
  renderProducts() {
    const productRepository = new ProductRepository();
    const productsDB = productRepository.productsDB();
    console.log(2222, productsDB);
    const productsElement = document.querySelector(".row");
    let resurl = "";
    for (const product of productsDB) {
      resurl += `<div class="col-sm-12 col-md-4 col-xl-2">
            <div class="card">
              <div class="card-img">
                <img
                  src="${product.image}"
                  class="card-img-top"
                  alt="..."
                />
    
                <div class="btn-img">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span
                    href=""
                    class="buy-now" onclick="handleBuyNow('${product.id}')"
                    >Mua hàng</span
                  >
                  <i class="fa-regular fa-eye"></i
                  ><span
                    class="view-now" onclick="handleViewNow('${product.id}')"
                    class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >xem nhanh</span
                  >
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text"> size: ${product.size}</p>
                <p class="card-text" >${product.price.toLocaleString()}VND</p>
              </div>
            </div>
          </div> `;
    }
    productsElement.innerHTML = resurl;

    return {
      data: productsDB,
      status: "susscessed",
      message: "Get product sucessful.",
    };
  }
}
