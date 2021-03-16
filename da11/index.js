function getday() {
  console.log(new Date());
  let a = new Date().getMonth() + 1;
  if (a < 4) {
    console.log("mua xuan");
  }
  else if (a < 7) {
    console.log("mua he");

  }
  else if (a < 10) {
    console.log("mua thu");

  }
  else if ((a < 13)) {
    console.log("mua dong");

  }
  else
    console.log("vo ly")
}

function kiemtrangay(a, b) {
  if (a === 1 || a === 3 || a === 5 || a === 7 || a == 8 || a === 10 || a === 12) {
    console.log(" thang co 31 ngay");
  }
  else if (a === 4 || a === 6 || a === 9 || a === 11) {
    console.log("thang co 30 ngay");
  }
  else if (a === 2) {
    if (b % 4 === 0 && b % 100 !== 0 && b % 400 !== 0 || b % 100 === 0 && b % 400 === 0) {
      console.log("thang co 29 ngay");
    }
    else
      console.log("thang co 28 ngay");
  }

}
function tongchuso(a) {
  let tong = 0;

  while (a > 0) {
    let sodu;
    sodu = a % 10;
    tong += sodu;
    a = Math.floor(a / 10);
  }
  console.log(" tong = " + tong);
}
function gettring(x) {

  let a = x.length;
  let b = x.substring(0, 10);
  console.log("chuoi ta can la: " + b + "...");
}
function xtranslate(a) {
  switch (a) {
    case "French":
      console.log("salut");
      break;
    case "Hawaiian":
      console.log("bok");
      break;
    case "Germany":
      console.log("Hallo");
      break;
    case "Italy":
      console.log("Ciao");
      break;
    case "Croatia":
      console.log("hui");
      break;

  }

}


