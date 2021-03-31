function kt() {
    let x = document.getElementById("yearinput").value;
    let y = document.getElementById("age");

    if (x < 0 || x > 2021) {
        alert("vui lòng nhập lại năm sinh");
    }
    else {

        y.innerHTML = ` tuổi hiện nay: ${2021 - x} tuổi`

    }

}
function check() {
    let x = document.getElementById("weight").value;
    let y = document.getElementById("high").value / 100;
    let z = document.getElementById("result");
    if (x > 20 && y > 1 && x < 200 && y < 2 ) {
        z.innerHTML = ` chỉ số BMI là: ${Math.floor(x / (y * y))}`
    }
    else
        alert("thông tin chưa chính xác cần xem lại")
}
