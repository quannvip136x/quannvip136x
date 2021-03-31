function tongso(a, b) {
    let s = 0;
    let max = a;
    if (a < b) {
        max = b;
    }
    else if (a > b) {
        a = b;
    }

    for (let i = 1; i < max; i++) {
        if (i > a) {
            s += i;
        }
    }
    console.log("tong cua khoang can tim la: ", s);
}
tongso(4, 9);
function changeword(str) {
    let result = str[0].toLowerCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i] == " ") {
            result += "-";
        }
        else {
            result += str[i];
        }
    }
    return result.toLowerCase();
}

function time(x) {
    let a = new Date().getHours();
    let b = new Date().getMinutes();
    let c = new Date().getSeconds();
    console.log(`thoi gian hien tai la ${a}:${b}:${c}`)
    c = c + x;
    if (c >= 60) {
        let B = b + Math.floor(c / 60);
        let C = c % 60;
        A = a;
        if (B >= 60) {
            A = a + Math.floor(b / 60);
            B = B % 60;
        }
        console.log(`sau khi nhap gia tri x thoi gian la: ${A}:${B}:${C}`);

    }
    else {
        C = c;
        B = b;
        A = a;
        console.log(`sau khi nhap x thoi gian la: ${A}:${B}:${C}`);

    }
}
function ocsen(x, y, h) {
    if (x < y) {
        return `ngay thang con dai cung k len duoc`;
    }
    else {
        let a = x - y;
        z = h / a;
        return `thoi gian oc sen bo het : ${z} ngay`;
    }

}

function sapxeptangdan(a) {
    let result=""+a;
    let arr=[];
    for (let i=0;i<result.length;i++){
        if (result[i]!=0){
       arr.push(result[i]);
        }

    }
    let tg = 0;
    let x="";
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tg = arr[i];
                arr[i] = arr[j]
                arr[j] = tg;
                

            }
          

        }
        x+=`${arr[i]}`
        

    }
    console.log(x);
}
