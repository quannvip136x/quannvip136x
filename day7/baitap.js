function toCelsius(x){
    let y;
  y= (x-32)/1.8
  console.log("Nhiệt độ là "+y+" độ C")
}
function toFahrenheit(b){
    let a;
    a=(b*1.8)+32;
    console.log("Nhiệt độ là "+a+" độ F");
}
function toTrade(x,y){

    let z,a;
    z= x*23000;
    a=x*27000;
    console.log("Số tiền là "+z+" VNĐ");
    console.log("Số tiề là "+ a+" VNĐ");
    let usd,eur;
    usd = y/23000;
    eur = y/27000;
    console.log("Số tiền là "+usd+" USD");
    console.log("Số tiền là "+eur+" EUR");
}
function ToCentury(y){
    let x;
    x= Math.floor((y-1)/100)+1;
    console.log("Thế kỉ thứ: "+x);
}
