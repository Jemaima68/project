let selectedunit = localStorage.getItem('unit');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedunit; 

localStorage.setItem('qrcode', "scannedQRCode");
if (localStorage.getItem("qrcode") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
}

function onLogout(){
    localStorage.removeItem("unit")
    localStorage.removeItem("qrcode")
    window.location.href = "../index.html";
}