
document.getElementById('btn_case_plus').addEventListener('click', function () {

    const newCaseFieldNumber = updateCaseNumber(true);
    updateCasePrice(newCaseFieldNumber);

})
document.getElementById('btn_case_minus').addEventListener('click', function () {
    const newCaseFieldNumber = updateCaseNumber(false);
    updateCasePrice(newCaseFieldNumber); 
})
