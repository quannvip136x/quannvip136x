

// bài 2
function drawRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Nhập sai rồi dữ liệu");
        return;
    }
    let str = "";
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            str += "&#32;*"
        }
        str += "<br/>"
    }
    document.write(str)
}
drawRectangle(4, 5)
// bài 3
function drawEmptyRectangle(m, n) {
    document.writeln("<br>")
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Nhập sai rồi dữ liệu");
        return;
    }
    let str = "";
    for (let x = 0; x < m; x++) {
        str += "* "
    }
    for (let i = 1; i < n - 2; i++) {
        str += "<br>"
        for (let j = 0; j < m; j++) {

            if (j === 0 || j === m - 1) {
                str += "* ";
            } else {
                str += "* ".fontcolor("white");
            }
        }
    }
    str += "<br>"
    for (let x = 0; x < m; x++) {
        str += "* ";
    }
    document.write(str);
}
drawEmptyRectangle(4, 5)
document.write("<br>")
// bai 4
function veTamGiacVuong(m) {
    document.write("<br>")
    if (m <= 0 || Number.isInteger(m) === false) {
        document.write("Nhập sai rồi dữ liệu ");
        return;
    }
    let str = "";
    for (let i = 0; i < m; i++) {
        str += "<br>"
        for (let j = 0; j <= i; j++) {

            str += "* ";
        }
    }
    str += "<br>"
    document.write(str)
}
veTamGiacVuong(5)
// bai 5
document.write("<br>")
function veTamGiacCan(m) {
    document.write("<br>")
    if (m <= 0 || Number.isInteger(m) === false) {
        document.write("Nhập sai rồi dữ liệu");
        return;
    }
    let str = "";
    for (let i = 1; i <= m; i++) {
        str += "<br>"
        for (let j = 1; j < i; j++) {
            str += "* ".fontcolor("white")
        }
        for (j = 0; j < (m * 2 - (2 * i - 1)); j++) {
            str += "* "
        }
    }
    str += "<br>"
    document.write(str)
}
veTamGiacCan(4)


document.write("<br>")
// function veTamGiacCx(m) {
//     document.write("<br>")
//     if (m <= 0 || Number.isInteger(m) === false) {
//         document.write("Nhập sai rồi dữ liệu");
//         return;
//     }
//     let str = "";
//     for (let i = 1; i <= m; i++) {
//         str += "<br>"
//         for (let j = 1; j < i; j++) {
//             str += "* "
//         }
//         for (j = 0; j < (m * 2 - (2 * i - 1)); j++) {
//             str += "* "
//         }
//     }

//     for (let i = 1; i <= m; i++) {
//         str += "<br>"
//         for (let j = 1; j < i; j++) {
//             str += "* ".fontcolor("white")
//         }
//         for (j = 0; j < (m * 2 - (2 * i - 1)); j++) {
//             str += "* "
//         }
//     }
//     str += "<br>"
//     document.write(str)
// }
// veTamGiacCx(4)
function drawRectangle(m, n) {
    if (m <= 0 || m % 2 === 1 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Nhập sai rồi dữ liệu");
        return;
    }
    let str = "";
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            str += "&#32;*"
        }
        str += "<br/>"
    }
    document.write(str)
}
drawRectangle(10, 5)