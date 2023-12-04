// Liệt kê tất cả các số chính phương nhỏ hơn n

let number = 100;
let n;
let arr = [];
for (i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 2 == 0) {
        arr.splice(1, 0, i);
    }
}
console.log(arr);
