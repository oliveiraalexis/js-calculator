
let calcHistory = document.getElementById('history').lastElementChild;
let result = document.getElementById('result').lastElementChild;

const AC = document.getElementById("AC");
const DEL = document.getElementById("DEL");

const numberButtons = document.getElementsByClassName("number");
const operations = document.getElementsByClassName("operator");
const dot = document.getElementsByClassName("dot");
const btnResult = document.getElementById("=");


AC.addEventListener("click", allClear);

DEL.addEventListener("click", () => {
    let content = result.textContent;
    
    if(content.length > 1) 
        result.innerText = content.slice(0, content.length-1);
    else {
        allClear(); 
    }

});

for (const key in numberButtons) {
    if (Object.hasOwnProperty.call(numberButtons, key)) {
        const element = numberButtons[key];
        element.addEventListener("click", (e) =>{

            if (result.textContent == "0") {
                allClear();
                result.innerText = e.target.textContent;
            }
            else{
                result.innerText += e.target.textContent;
            }
        })
    }
}

for (const key in operations) {
    if (Object.hasOwnProperty.call(operations, key)) {
        const element = operations[key];
        element.addEventListener("click", (e) =>{
            if (result.textContent[result.textContent.length-1].match("[-+x*/]") == null){
                    result.textContent += e.target.textContent;
            }
        })
    }
}

btnResult.addEventListener("click", () => {
    let replacedResult

    calcHistory.innerText = result.textContent+"=";
    calcHistory.style.color = "#FFFFFF";

    if (result.textContent.includes("x")){
        replacedResult = result.textContent.replaceAll("x", "*");
    }
    result.innerText = eval(replacedResult || result.textContent);
        
})


function allClear(){
    calcHistory.innerText = "0";
    calcHistory.style.color = "#000A25";
    result.innerText = "0"; 
}