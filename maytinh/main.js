// màn hình hiển thị
var input = document.querySelector(".input");
// các nút trên máy tính
var items = Array.from(document.querySelectorAll(".item"));
// lặp qua các nút
items.forEach(function (btn) {
    // gán sự kiện nút
    btn.addEventListener("click", function () {
        // màn hình hiện thị k thì biến đổi thành chuỗi
        if (input.innerHTML == "0")
            input.innerHTML = "";
        // ấn vào nút AC thì đưa màn hình trở về giá trị 0
        if (btn.innerHTML == "AC")
            input.innerHTML = "0";
        else if (btn.innerHTML == "Del") {
            // tạo biến chuyển đổi chuỗi thành mảng giá trị
            var arrtext = Array.from(input.innerHTML);
            // xóa đi phần tử cuối cùng của mảng
            arrtext.splice(arrtext.length - 1, 1);
            // khi vẫn còn giá trị trên màn hình thì chuyển đổi mảng trở lại thành chuổi
            if (arrtext.length != 0)
                input.innerHTML = arrtext.join("");
                
            else
                // nếu xóa hết phần tử thì màn hình hiển thị giá trị 0
                input.innerHTML = "0";
        }
        // khi bấm nút bằng thì sẽ đưa chuỗi vào hàm eval để tính giá trị
        else if (btn.innerHTML == "=") {
           input.innerHTML = eval(input.innerHTML);

        }
        // thực hiện cộng giá trị các nút
        else input.innerHTML += btn.innerHTML;
    })

})
