
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


document.getElementById('btn_phone_plus').addEventListener('click', function () {
    const totalPhoneElement = updatePhoneNumber(true);
    totalPhonePrice(totalPhoneElement);
})
document.getElementById('btn_phone_minus').addEventListener('click', function () {
    const totalPhoneElement =  updatePhoneNumber(false);
    totalPhonePrice(totalPhoneElement);

})