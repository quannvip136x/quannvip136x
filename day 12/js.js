function sohoanhao(a) {

    for (let i = 2; i < a; i++) {
        let x = 1;
        for (let j = 2; j <= (i / 2); j++) {


            if (i % j == 0) {
                x += j;
            }

        }
        if (x === i) {
            console.log(i);
        }
    }



}
function timso(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];

        }
        if (min > arr[i]) {
            min = arr[i];
        }




    }
    console.log("so lon nhat la: " + max);
    console.log("so nho nhat: " + min)

}
function timsothu2(arr) {
    let max = arr[0];
    let max2 = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];

        }
    }
    for (i = 1; i < arr.length; i++) {
        if (arr[i] === max) {
            arr.splice(i, 1);

        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (max2 < arr[i]) {
            max2 = arr[i];

        }
    }
    console.log(max2)
    //  console.log("so lon thu 2 cua day: "+max2)
}
function kiemtravitri(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log("so le dau tien la" + arr[i]);
            break;

        }
    }
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] % 2 === 0) {
            console.log("so chan cuoi cung  la" + arr[i]);
            break;

        }
    }
}
function inchuoi(str) {
    let x = "";
    for (let i = str.length - 1; i > 0; i--) {
        x += str[i];

    }
    console.log("chuoi dao nguoc: " + x);

}
function sapxeptangdan(arr) {
    let tg = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                tg = arr[i];
                arr[i] = arr[j]
                arr[j] = tg;

            }

        }
        console.log(arr[i]);

    }



}
function sapxepgiamdan(arr) {
    let tg = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tg = arr[j];
                arr[j] = arr[i];
                arr[i] = tg;

            }

        }
        console.log(arr[i]);

    }
}
