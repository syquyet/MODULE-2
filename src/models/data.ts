type product = {
  id: string;
  name: string;
  price: number;
  size: string[];
  quantity: number;
  image: string;
  describe: string;
};
const products: product[] = [
  {
    id: "SP_001",
    name: "váy công sở",
    price: 100000,
    size: ["M", "L", "XL"],
    quantity: 20,
    image: "/assets/image/anh sản phẩm 1.jpg",
    describe:
      " Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm thời trang cho nữ",
  },
  {
    id: "SP_002",
    name: "áo thun nữ đen",
    price: 200000,
    size: ["S", "L", "XXL"],
    quantity: 10,
    image: "/assets/image/anh sản phẩm 2.jpg",
    describe:
      " Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm thời trang cho nữ",
  },
  {
    id: "SP_003",
    name: "áo thun nữ trắng",
    price: 300000,
    size: ["S", "M", "XXL"],
    quantity: 50,
    image: "/assets/image/anh sản phẩm 3.jpg",
    describe:
      " Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm thời trang cho nữ",
  },
  {
    id: "SP_004",
    name: "váy chân dài",
    price: 400000,
    size: ["M", "L", "XL"],
    quantity: 20,
    image: "/assets/image/anh sản phẩm 4.jpg",
    describe:
      " Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm thời trang cho nữ",
  },
  {
    id: "SP_005",
    name: "váy áo",
    price: 500000,
    size: ["M", "L", "XL"],
    quantity: 20,
    image: "/assets/image/anh sản phẩm 5.jpg",
    describe:
      " Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm thời trang cho nữ",
  },
  {
    id: "SP_006",
    name: "váy công sở",
    price: 600000,
    size: ["L", "XL", "XXL"],
    quantity: 20,
    image: "/assets/image/anh sản phẩm 6.jpg",
    describe:
      " Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm thời trang cho nữ",
  },
  {
    id: "SP_007",
    name: "chân váy",
    price: 700000,
    size: ["M", "L", "XL"],
    quantity: 20,
    image: "/assets/image/anh sản phẩm 7.jpg",
    describe:
      " Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm thời trang cho nữ",
  },
  {
    id: "SP_008",
    name: "váy suông dài",
    price: 800000,
    size: ["S", "M", "XXL"],
    quantity: 20,
    image: "/assets/image/anh sản phẩm 8.jpg",
    describe:
      " Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm thời trang cho nữ",
  },
  {
    id: "SP_009",
    name: "váy công sở",
    price: 900000,
    size: ["M", "L", "XL"],
    quantity: 20,
    image: "/assets/image/anh sản phẩm 4.jpg",
    describe:
      " Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm thời trang cho nữ",
  },
];

localStorage.setItem("products", JSON.stringify(products));
