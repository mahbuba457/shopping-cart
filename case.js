// 1.add event listener to the plus butoon
// 2.get the value insde the case Number
// 3.convert the numebr to an SVGAnimatedInteger
// 4.calculate the new case Number
// 5.set the value to the case number filed
function updateCaseNumber(isIncrease){

    const caseNumberField=document.getElementById('case-number-field');
    const caseNumberString=caseNumberField.value;
    const previousCaseNumber=parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease===true){
        newCaseNumber = previousCaseNumber + 1;

    }
    else{
        newCaseNumber=previousCaseNumber - 1;
    }
    caseNumberField.value=newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
const caseTotalPrice=newCaseNumber * 59;
const caseTotalElement=document.getElementById('case-total');
caseTotalElement.innerText =caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
const newCaseNumber=updateCaseNumber(true);
updateCaseTotalPrice(newCaseNumber);
calculateSubTotal();

})
document.getElementById('btn-case-minus').addEventListener('click',function(){
const newCaseNumber=updateCaseNumber(false);
updateCaseTotalPrice(newCaseNumber);
calculateSubTotal();
}) 