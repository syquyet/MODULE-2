"use strict";
function sortData(data) {
    data.sort((a, b) => (a > b ? 1 : -1));
    return data;
}
console.log(sortData([1, 3, 10, 5, 20]));
console.log(sortData(["a", "c", "b", "d"]));
function pushData(data, a) {
    data.push(a);
    return data;
}
console.log(111, pushData([1, 2], 10));
function checkData(taget, data) {
    const found = taget.find((element) => element === data);
    if (found) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkData([1, 2, 3, 4, 5], 6));
console.log(checkData(["a", "b", "c"], "c"));
function findMax(datas) {
    let max = datas[0];
    for (const data of datas) {
        if (data > datas[0]) {
            max = data;
        }
    }
    return max;
}
console.log(22222, findMax(["a", "b", "c"]));
function readOject(data) {
    for (const key in data) {
        console.log(key + "là" + data[key]);
    }
}
readOject({ name: "nguyễn văn a", age: 20 });
class CloneArray {
    constructor(array) {
        this.array = array;
    }
    pushArray(...data) {
        this.array.push(...data);
    }
    sum() {
        const sum = this.array.reduce((pre, current) => {
            if (typeof current === "number") {
                return pre + current;
            }
            else {
                return 0;
            }
        }, 0);
        if (typeof this.array[0] === "number") {
            return sum;
        }
        return "phần tử ko phải là số";
    }
    sumArray() {
        let sum = 0;
        for (const item of this.array) {
            if (typeof item === "number") {
                sum += item;
            }
        }
        if (typeof this.array[0] === "number") {
            return sum;
        }
        return "phần tử ko phải là số";
    }
}
const cloneArray = new CloneArray(["a", "b"]);
cloneArray.pushArray("c");
console.log(cloneArray);
console.log(666, cloneArray.sumArray());
