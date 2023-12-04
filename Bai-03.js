// Liệt kê tất cả các số chính phương nhỏ hơn n

let number = 100;
for (i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 1 == 0) {
        console.log(i);
    }
}

