// function for case number AND case price
function updateCaseNumber(isIncrase) {
    const caseField = document.getElementById('case_field');
    const caseFieldString = caseField.value;
    const previousCaseFieldNumber = parseInt(caseFieldString);

    let newCaseFieldNumber;
    
    if (isIncrase === true) {
        newCaseFieldNumber = previousCaseFieldNumber + 1;
    } else {
        newCaseFieldNumber = previousCaseFieldNumber - 1;
    }
    caseField.value = newCaseFieldNumber;

    return newCaseFieldNumber;
}
function updateCasePrice(newCaseFieldNumber) {
    const caseTotalPrice = newCaseFieldNumber * 59;
    const caseTotalElement = document.getElementById('case_total_element');
    caseTotalElement.innerText = caseTotalPrice;
}


// function for mobile element AND price

function updatePhoneNumber(isIncrase) {
    const phoneField = document.getElementById('phone_field');
    const phoneFieldString = phoneField.value;
    const phoneFieldNumber = parseInt(phoneFieldString);
    let totalPhoneElement;
    if (isIncrase) {
        totalPhoneElement = phoneFieldNumber + 1;
    } else {
        totalPhoneElement = phoneFieldNumber - 1;
    }

    phoneField.value = totalPhoneElement;
    return totalPhoneElement ;
}
function totalPhonePrice(totalPhoneElement){
    const totalPhonePrice = totalPhoneElement * 1219; 

    const totalPriceElement = document.getElementById('total_phone_price');
    totalPriceElement.innerText = totalPhonePrice; 
}
