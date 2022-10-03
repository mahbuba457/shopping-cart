function updatePhoneNumber(isIncrease){

    const PhoneNumberField=document.getElementById('phone-number-field');
    const PhoneNumberString=PhoneNumberField.value;
    const previousPhoneNumber=parseInt(PhoneNumberString);
    let newPhoneNumber;
    if(isIncrease===true){
        newPhoneNumber = previousPhoneNumber + 1;

    }
    else{
        
        newPhoneNumber=previousPhoneNumber - 1;
    }
    PhoneNumberField.value=newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
const PhoneTotalPrice=newPhoneNumber * 1219;
const PhoneTotalElement=document.getElementById('phone-total');
    PhoneTotalElement.innerText =PhoneTotalPrice;
}

function getTextElementValueById(elementId){
const PhoneTotalElement=document.getElementById(elementId);
const currentPhoneTotalString=PhoneTotalElement.innerText;
const currentPhoneTotal=parseInt(currentPhoneTotalString);
return currentPhoneTotal;
}
function calculateSubTotal(){
// calculate total
const currentPhoneTotal=getTextElementValueById('phone-total');
const currentCaseTotal=getTextElementValueById('case-total');
const currentSubTotal=currentPhoneTotal+currentCaseTotal;
const subTotalElement=document.getElementById('sub-total');
subTotalElement.innerText = currentSubTotal;


}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
const newPhoneNumber=updatePhoneNumber(true);
updatePhoneTotalPrice(newPhoneNumber);
calculateSubTotal();


// // calculate total
// const currentPhoneTotal=getTextElementValueById('phone-total');
// const currentCaseTotal=getTextElementValueById('case-total');
// const currentSubTotal=currentPhoneTotal+currentCaseTotal;
// const subTotalElement=document.getElementById('sub-total');
// subTotalElement.innerText = currentSubTotal;








})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
const newPhoneNumber=updatePhoneNumber(false);
updatePhoneTotalPrice(newPhoneNumber);
calculateSubTotal();

}) 