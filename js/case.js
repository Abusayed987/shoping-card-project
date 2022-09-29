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

document.getElementById('btn_case_plus').addEventListener('click', function () {

    const newCaseFieldNumber = updateCaseNumber(true);
    updateCasePrice(newCaseFieldNumber);

})
document.getElementById('btn_case_minus').addEventListener('click', function () {
    const newCaseFieldNumber = updateCaseNumber(false);
    updateCasePrice(newCaseFieldNumber); 
})
