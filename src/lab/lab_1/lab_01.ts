abstract class Shape {
  private color: string;
  constructor(color: string) {
    this.color = color;
  }
  abstract getArea(): number;
  abstract getPerimeter(): number;
  getColor() {
    return this.color;
  }
  setColor(color: string) {
    this.color = color;
  }
}
class Rectarigle extends Shape {
  private width: number;
  private height: number;
  constructor(width: number, height: number, color: string) {
    super(color);
    this.width = width;
    this.height = height;
  }
  getWidth(): number {
    return this.width;
  }
  getHeight(): number {
    return this.height;
  }
  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return (this.width + this.height) * 2;
  }
  drawShapal() {
    const element = document.querySelector(".rectarigle div") as HTMLDivElement;
    if (element) {
      element.style.width = ` ${this.width}px`;
      element.style.height = `${this.height}px`;
      element.style.backgroundColor = `${this.getColor()}`;
    }
  }
}
class Circle extends Shape {
  private radius: number;
  constructor(radius: number, color: string) {
    super(color);
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
  getPerimeter(): number {
    return Math.PI * (this.radius * 2);
  }
  drawShapal() {
    const element = document.querySelector("#circle div") as HTMLDivElement;
    if (element) {
      element.style.width = ` ${this.radius * 2}px`;
      element.style.height = `${this.radius * 2}px`;
      element.style.backgroundColor = `${this.getColor()}`;
      element.style.borderRadius = "50%";
    }
  }
}
const rectarigle_1 = new Rectarigle(200, 100, "red");
console.log("hình CN có diện tích là:", rectarigle_1.getArea());
console.log("hình CN có chu vi là:", rectarigle_1.getPerimeter());
rectarigle_1.drawShapal();
const crilce_1 = new Circle(100, "yellow");
crilce_1.drawShapal();
// const crilce_2 = new Circle(200, "green");
// crilce_2.drawShapal();

class Main {
  getShape() {
    const selecteShape = prompt("nhập vào hình caanf vẽ: rectarigle - circle");
    if ("rectarigle" === selecteShape) {
      const width = Number(prompt("nhập chiều dài hình CN"));
      const height = Number(prompt("nhập chiều rộng hình CN"));
      const color = prompt("nhập màu hình CN") || "";
      const rectarigle = new Rectarigle(width, height, color);
      const div = document.createElement("div");
      div.style.width = rectarigle.getWidth() + "px";
      div.style.height = rectarigle.getHeight() + "px";
      div.style.backgroundColor = rectarigle.getColor();
      document.body.append(div);
    }
  }
}
function handleDraw(): void {
  const main = new Main();
  main.getShape();
}
