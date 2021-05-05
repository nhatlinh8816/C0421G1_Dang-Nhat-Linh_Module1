let inputWidth;
let inputLength;
inputLength = prompt("Điền chiều dài");
inputWidth = prompt("Điền chiều rộng");
let width= parseInt(inputWidth);
let length  = parseInt(inputLength);
let acreage = width*length;
document.write("Diện tích là " + acreage);