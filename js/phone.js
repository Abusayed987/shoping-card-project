document.getElementById('btn_phone_plus').addEventListener('click', function () {
    const totalPhoneElement = updatePhoneNumber(true);
    totalPhonePrice(totalPhoneElement);

})
document.getElementById('btn_phone_minus').addEventListener('click', function () {
    const totalPhoneElement =  updatePhoneNumber(false);
    totalPhonePrice(totalPhoneElement);

})