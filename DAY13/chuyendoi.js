function change(){
let x= document.getElementById("countries1").value;
let y = document.getElementById("countries2").value;
let z =document.getElementById("values").value;
let a =0;
console.log(x,y,z)
if (x==="USD"&&y==="VND"){
    a = `${(z*23000)}VNĐ`;
}
else if (x==="USD"&& Y==="RMB"){
    a=`${z*6519} nhân dân tệ`
}
console.log(a)

}



