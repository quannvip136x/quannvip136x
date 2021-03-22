
function bai1(a, b) {
    let snt = 0;
    for (let i = a; i <= b; i++) {
        let test = 1;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                test = 0;

            }
        }
        if (test === 1) {
            snt++;
            console.log(i + " : là số Nguyên tố");
        }
    }
    console.log("Số lượng số nguyên tố có trong đoạn ab là", snt)
}

function chenso(arr) {
    let max = arr[0];
    let dem = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            dem++;
        }
    }

    arr.splice(dem + 1, 0, '100')
    console.log(arr)

}


function tangDan(arr) {
    let a = arr.push('10')

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                k = arr[i];
                arr[i] = arr[j];
                arr[j] = k;
            }
        }
        console.log(arr[i])
    }

}
tangDan([1, 5, 3, 9, 6, 8])

function soDoiXung(value) {
    let soCuoi;
    let soDao = 0;
    let tmp = value;
    while (tmp != 0) {
        soCuoi = tmp % 10;
        soDao = (soDao * 10) + soCuoi;
        tmp = Math.floor(tmp / 10);
    }
    if (soDao == value) {
        console.log("Là đối xứng")
    } else {
        console.log("Không đối xứng")
    }
}

function giaCuocTaxi() {
    soKm = prompt("Nhập số km")
    let b = prompt("Thời gian chờ bạn sau khi gọi xe lưu ý tính bằng phút")
    let giaCuoc = 0;
    if (soKm < 0 || b < 0) {
        return `Km hoặc thời gian sai mời nhập lại`
    }
    if (soKm < 1) {
        giaCuoc = 9000
        console.log("Số tiền cần trả là:", giaCuoc)
    } else if (1 < soKm && soKm < 31 && b == 0) {
        giaCuoc = (soKm * 11000) + 9000
        console.log("Số tiền cần trả là:", giaCuoc)
        console.log("Thời gian chờ là 0")
    } else if (soKm > 30 && b == 0) {
        giaCuoc = 9000 + 330000 + ((soKm - 30) * 9500)
        console.log("Số tiền cần trả là:", giaCuoc)
        console.log("Thời gian chờ là 0")
    }
    if (1 < soKm && soKm && b > 1) {
        giaCuoc = 400 * b + (soKm * 11000) + 9000
        console.log("Số tiền cần phải trả sau khi chờ:", giaCuoc)
        console.log("Thời gian chờ là", b + " Phút")
    }
    if (soKm > 30 && b > 1) {
        giaCuoc = 400 * b + (soKm * 11000) + 9000
        console.log("Số tiền cần phải trả sau khi chờ", giaCuoc)
        console.log("Thời gian chờ là", b + " Phút")
    }
}
