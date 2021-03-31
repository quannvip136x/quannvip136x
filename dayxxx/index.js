// document.getElementById("demo").innerHTML = " xin chao tat ca cac ban, toi la dom"
// getElementById() de lay ra phan tu co id tuong ung
// innerHTML la noi dung Element
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelection();

// var hello = document.getElementById("demo");
// hello.style.color="red";
// hello.innerHTML="Hello World";
// hello.style.textAlign="center";
// hello.style.background ="lightblue";
// function pressOnClick(){
//     hello.style.color ="blue";
//     hello.innerHTML ="xin chao";
// }
let radom = Math.floor(Math.random()*100);
let alertMessage =document.getElementById("alert");
let resultMessage = document.getElementById("result")
function OnClick(){
    let number =parseInt( document.getElementById("number").value);
    console.log(number,radom);
    if( number === 35){
     radom.innerHTML=" bạn đã trúng 1 chiếc xe SH 150i"
    }
    else{
        console.log("chúc bạn may mắn lần sau")
    }
}