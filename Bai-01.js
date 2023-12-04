// Viết chương trình tổng các giá trị lẻ nguyên dương nhỏ hơn N

let n = 100;
let total = 0
for (i = 1; i < 100; i++){
    if (i % 2 != 0) {
        total = total + i;
    }
}
console.log('tổng các số nguyên dương là: ' + total);
