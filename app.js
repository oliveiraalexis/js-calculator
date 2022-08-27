
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

    if (result.textContent[result.textContent.length-1].match("[-+x*/]") == null){
        let replacedResult;

        // tratando o seguinte exemplo: histórico (3*2=), result (6) e clique em '=' novamente
        // if(calcHistory.textContent.endsWith("=") && !result.textContent.match("[-+x*/]")){
            
        //     let separatorCaracter = calcHistory.textContent.match("[-+x*/]");
        //     let number = calcHistory.textContent.slice(0, calcHistory.textContent.length-1);
        //     console.log(separatorCaracter[0]);
            
        //     number.split(separatorCaracter[0]);
        //     calcHistory.innerHTML = `${result.textContent} ${separatorCaracter[0]} ${number[2]}`;
        //     result.innerHTML = `${result.textContent} ${separatorCaracter[0]} ${number[2]}`;
        // }

        calcHistory.innerText = result.textContent+"=";
        calcHistory.style.color = "#FFFFFF";

        result.innerText = (result.textContent.includes("x"))
            ? eval(result.textContent.replaceAll("x", "*"))
            : eval(result.textContent);
    }
        
})


function allClear(){
    calcHistory.innerText = "0";
    calcHistory.style.color = "#000A25";
    result.innerText = "0"; 
}