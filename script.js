function demSoLanXuatHienCuaPhanTu() {
    let arr = [];
    for (let i = 0; i < 100; ++i){
        arr[i] = Math.floor(Math.random() * 101);
    }
    document.write(arr);
    let n = parseInt(prompt("Nhập phần tử cần tìm : "));
    let count = 0;
    for(let i = 0; i < arr.length-1; i++){
        if(n === arr[i]){
            count ++;
        }
    }

    document.write(` <br/> phần tử ${n} xuất hiện ${count} lần trong mảng`);
}
demSoLanXuatHienCuaPhanTu();