
let calcHistory = document.getElementById('history').lastElementChild;
let result = document.getElementById('result').lastElementChild;

const AC = document.getElementById("AC");
const DEL = document.getElementById("DEL");

const buttons = document.getElementsByClassName("number");

AC.addEventListener("click", allClear);

DEL.addEventListener("click", () => {
    let content = result.textContent;
    
    if(content.length > 1) 
        result.innerText = content.slice(0, content.length-1);
    else {
        allClear(); 
    }

});

for (const key in buttons) {
    if (Object.hasOwnProperty.call(buttons, key)) {
        const element = buttons[key];
        element.addEventListener("click", (e) =>{
            if(calcHistory.textContent.includes("=")) {
                allClear();
                result.innerText = e.target.textContent;
            } 
            else if(result.textContent.length == 1 && result.textContent == "0") {
                result.innerText = e.target.textContent;
            }
            else{
                result.innerText += e.target.textContent;
            }
        })
    }
}

function allClear(){
    calcHistory.innerText = "0";
    calcHistory.style.color = "#000A25";
    result.innerText = "0"; 
}