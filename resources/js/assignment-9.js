let result = document.querySelector(".result");
let calculationHistory = {
    number1History : [],
    operatorHistory : [],
    number2History : [],
    resultsHistory : []
};
let historyContainer = document.querySelector(".history-container");
let showHistory = document.querySelector(".show-history");
let deleteMessage = document.querySelector(".delete-message");
let deleteMessageContainer = document.querySelector(".delete-message-container");
let confirmPopUpWrapper = document.querySelector(".confirm-pop-up-wrapper");
let confirmPopUp = document.querySelector(".confirm-pop-up");
let inputsWrapper = document.querySelector(".inputs-wrapper");
let mainContainer = document.querySelector(".container");
let contentWrapper = document.querySelector(".content-wrapper");
showHistory.style.visibility = "hidden";
function calculate(num1, num2, op) {
   
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (!Number.isInteger(num1||num2)) {
                return (num1 / num2).toFixed(3);
            } else {
                return (num1 / num2); 
            }
            
        case "%":
            return num1/num2*100;
        case "Remainder":
            return num1 % num2;
        default:
            return "Please select a valid operator";
    }
}

document.getElementById("submit").addEventListener("click", () => {
    getInputs();
});

function cancelOkBtn(){
    confirmPopUpWrapper.style.visibility = "hidden";
    mainContainer.classList.remove("opacity");
    confirmPopUp.classList.remove("animate");
    return;
}
function getInputs(){
    let number1 = document.getElementById("number1").value.trim();
    let number2 = document.getElementById("number2").value.trim();
    let operator = document.getElementById("operator").value.trim();
    
    if (number1 === '' || number2 === '' || operator === '') {
        confirmPopUpWrapper.style.visibility = "visible";
        confirmPopUp.classList.toggle("animate");
        mainContainer.classList.toggle("opacity");
        confirmPopUp.innerHTML = ` 
        <p>  Please fill all the values! </p>
        <div class="cancel-btn"><div onclick = "cancelOkBtn()">Ok</div></div>
        `;
        return;
    }
    
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    
    if( operator === "/" && number2 === 0 ||operator === "%" && number2 === 0){
        confirmPopUpWrapper.style.visibility = "visible";
        confirmPopUp.classList.toggle("animate");
        mainContainer.classList.toggle("opacity");
        confirmPopUp.innerHTML = ` 
        <p>  Division by 0 is not allowed! </p>
        <div class="cancel-btn"><div onclick = "cancelOkBtn()">Ok</div></div>
        `;
      return;
    }
    
    document.querySelector("#input-display").innerHTML = `${number1} ${operator} ${number2}`;
    
    let calculationResult = calculate(number1, number2, operator);
    if (!Number.isInteger(calculationResult)) {
        result.innerHTML = `=  ${calculationResult.toFixed(3)}`;
    }
    else{
        result.innerHTML = `=  ${calculationResult}`;
    }
    
    
    if (calculationHistory.number1History.length >= 5) {
        calculationHistory.number1History.shift();
        calculationHistory.operatorHistory.shift();
        calculationHistory.number2History.shift();
        calculationHistory.resultsHistory.shift();
    }
    
    calculationHistory.number1History.push(number1);
    calculationHistory.operatorHistory.push(operator);
    calculationHistory.number2History.push(number2);
    if (!Number.isInteger(calculationResult)){
    calculationHistory.resultsHistory.push(calculationResult.toFixed(3));
    }
    else{
        calculationHistory.resultsHistory.push(calculationResult);  
    }

    showResultsHistory();
    
    document.getElementById("number1").value = '';
    document.getElementById("number2").value = '';
    document.getElementById("operator").value = '';
}

function showResultsHistory(){
        historyContainer.innerHTML = calculationHistory.resultsHistory.map((res, index) => `
            <div class="history-data-row" data-index="${index}">
               <div class="history-data"> 
                   <div>( ${index+1} ) </div>
                   <div>${calculationHistory.number1History[index]}</div>
                   <div>${calculationHistory.operatorHistory[index]}</div>
                   <div>${calculationHistory.number2History[index]}</div>
                   <div>=</div>
                   <div>${res}</div>
               </div>
               <div class="delete-btn">    
                   <i class="ri-delete-bin-5-line"></i>
               </div>
            </div>
        `).join('');
        
        if (calculationHistory.resultsHistory.length === 0) {
            showHistory.style.visibility = "hidden";
        } else {
            showHistory.style.visibility = "visible";
        }
        document.querySelectorAll(".delete-btn").forEach((btn, index) => {
            btn.addEventListener("click", () => {
                mainContainer.classList.toggle("opacity");
                confirmPopUpWrapper.style.visibility = "visible";
                
                confirmPopUp.innerHTML = `
                <h3>Delete it ?</h3>
                <hr>
                <div class = "message-of-dlt" >
                <p>This will delete <b>( ${index+1} ) ${calculationHistory.number1History[index]} ${calculationHistory.operatorHistory[index]} ${calculationHistory.number2History[index]} = ${calculationHistory.resultsHistory[index]} </b>.</p>
                </div>
                <div class = "confirm-buttons-wrapper">
                <div class = "delete">Delete</div>
                <div class = "cancel">Cancel</div>
                </div>
                `;
                confirmPopUp.classList.toggle("animate");
                let deleteBtn = document.querySelector(".delete");
                let cancelBtn = document.querySelector(".cancel");
                  cancelBtn.addEventListener("click",()=>{
                    confirmPopUpWrapper.style.visibility = "hidden";
                    mainContainer.classList.remove("opacity");
                    confirmPopUp.classList.remove("animate");
                    return;
                  });

                  deleteBtn.addEventListener("click", () => {
                   
                    calculationHistory.number1History.splice(index, 1);
                    calculationHistory.operatorHistory.splice(index, 1);
                    calculationHistory.number2History.splice(index, 1);
                    calculationHistory.resultsHistory.splice(index, 1);
                    confirmPopUp.classList.remove("animate");
                    mainContainer.classList.remove("opacity");
                    confirmPopUpWrapper.style.visibility =  "hidden";
                    
                    
                    deleteMessageContainer.style.display = "block";
                    
                    deleteMessage.innerHTML = `<p>Deleted!</p>`;
                    
                    
                    setTimeout(() => {
                        deleteMessage.style.transition = "0.8s";
                        deleteMessage.style.bottom = "0px";
                    }, 10);
                    
                    
                    setTimeout(() => {
                        deleteMessage.style.bottom = "200px";
                        deleteMessageContainer.style.display = "none";
                    }, 1500);
                    
                    showResultsHistory();
                });                
        });
    });
}
    showHistory.addEventListener("click",()=>{
        if(historyContainer.style.display == "block"){
        historyContainer.style.display = "none";
        showHistory.innerHTML = `<i class="ri-history-line"></i>`;
        
        }
        else{
        historyContainer.style.display = "block";
        showHistory.innerHTML = `<i class="ri-close-fill"></i>`;
        }
    });
   window.onkeydown = (event) => {
        switch(event.key){
            case 'Enter':
                document.getElementById("submit").classList.add("active");
                getInputs();
                setTimeout(function() {
                    document.getElementById("submit").classList.remove('active');
                }, 200);
                break;
        }
    };