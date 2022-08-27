
let calcHistory = document.getElementById('history').lastElementChild;
let result = document.getElementById('result').lastElementChild;

const AC = document.getElementById("AC");
const DEL = document.getElementById("DEL");

AC.addEventListener("click", allClear);

DEL.addEventListener("click", () => {
    let content = result.textContent;
    
    if(content.length > 1) 
        result.innerText = content.slice(0, content.length-1);
    else {
        allClear(); 
    }

});

function allClear(){
    calcHistory.innerText = "0";
    calcHistory.style.color = "#000A25";
    result.innerText = "0"; 
}