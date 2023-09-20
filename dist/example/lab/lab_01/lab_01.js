"use strict";
class Car {
    constructor(brand, price, name, color, catagory) {
        this.brand = brand;
        this.price = price;
        this.name = name;
        this.color = color;
        this.catagory = catagory;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
    setColor(color) {
        this.color = color;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    setCatagory(catagory) {
        this.catagory = catagory;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getColor() {
        return this.color;
    }
    getBrand() {
        return this.brand;
    }
    getCatagory() {
        return this.catagory;
    }
    inputData() {
        const name = prompt("nhập tên xe ", this.name);
        const price = Number(prompt("nhập giá xe ", this.price.toString()));
        const brand = prompt("nhập hãng xe ");
        const color = prompt("nhập màu  xe ");
        const catagory = prompt("nhập loại xe ");
        if (name) {
            this.name = name;
        }
        if (price) {
            this.price = price;
        }
        if (brand) {
            this.brand = brand;
        }
        if (color) {
            this.color = color;
        }
        if (catagory) {
            this.catagory = catagory;
        }
    }
}
