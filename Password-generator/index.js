const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassEl = document.getElementById("first-password");
let secondPassEl = document.getElementById("second-password");


function randomPassGen(){
    firstPassEl.textContent = "";
    for(let i = 0; i < 15; i++){
        firstPassEl.textContent += characters[Math.floor(Math.random() * characters.length)];
    }
    document.querySelector(".fa").style.visibility = "visible";
     secondPassEl.textContent = "";
    for(let i = 0; i < 15; i++){
        secondPassEl.textContent += characters[Math.floor(Math.random() * characters.length)];
    }
}

function CopyFirstPassword(){
    const firstPass = firstPassEl.textContent;
    navigator.clipboard.writeText(firstPass);
    document.getElementById("copy-info").style.visibility = "visible";

    setTimeout(() => {
        document.getElementById("copy-info").style.visibility = "hidden";
    }, 2000);
}