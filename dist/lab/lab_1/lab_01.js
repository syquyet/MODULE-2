"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
}
class Rectarigle extends Shape {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
    drawShapal() {
        const element = document.querySelector(".rectarigle div");
        if (element) {
            element.style.width = ` ${this.width}px`;
            element.style.height = `${this.height}px`;
            element.style.backgroundColor = `${this.getColor()}`;
        }
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return Math.PI * (this.radius * 2);
    }
    drawShapal() {
        const element = document.querySelector("#circle div");
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
function handleDraw() {
    const main = new Main();
    main.getShape();
}
