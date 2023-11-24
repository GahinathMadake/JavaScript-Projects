
let clickbtn = document.querySelector(".bttn");
let colorcode = document.querySelector("#code");

function generateColor(){
    let surroundcolor = document.querySelector('#wrapper');
    let randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    surroundcolor.style.background = randomcolor;
    colorcode.innerText = randomcolor;


}
clickbtn.addEventListener('click',generateColor);
generateColor();


let cpt =  document.getElementById('clipboard');
function copycode(){
    navigator.clipboard.writeText(colorcode.innerText);
    alert("Colour Code is copied Clipboard");
}

cpt.addEventListener('click', copycode);

