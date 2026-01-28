const btn = document.getElementById("generate");
const colorCode = document.querySelector(".colorcode");
const pageBackground = document.querySelector("body");

btn.addEventListener("click", generate);

let arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function generate(){
    let s = "#";
    for(let i =0; i<6; i++){
        let index = Math.floor(Math.random() * 16);

        s += arr[index];
    }

    colorCode.textContent = s;
    pageBackground.style.background = s;

    s = "#";

}


//copy automatically
colorCode.addEventListener("click", () =>{
    navigator.clipboard.writeText(colorCode.textContent);
    alert("Copied Color :)"); 
});
