// viết chương trình cho một mảng số thực. Hãy thay tất cả các số âm bằng giá trị tuyệt tốt của nó

let arr = [1,2,-3,-85,74,-6,-10,-100];

for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr[i] = arr[i] * (-1);
    }
}
console.log(arr);