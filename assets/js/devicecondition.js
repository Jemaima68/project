const conditions = ["Excellent", "Good", "Satisfactory", "Bad"]

let list = document.querySelector("#menu-list") 
conditions.forEach(function(condition){
    list.innerHTML += 
        `
            <div class="list-item ripple" data-value="`+condition+`">
                <i class="fas fa-chevron-right list-item-icon"></i>
                <span>
                    <p class="list-item-text">`+condition+`</p>
                <span>
            </div>
        `
})

let items = document.querySelectorAll(".list-item")
items.forEach(function(item){
    item.addEventListener("click", function(){
        let value = this.querySelector(".list-item-text").innerHTML
        console.log(value)
        localStorage.setItem('condition', value);
        setTimeout(function () {
            window.location.href = "./manufacturer.html";
        }, 400);
    })
})

let selectedunit = localStorage.getItem('unit');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedunit; 

if (localStorage.getItem("condition") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
}

function onLogout(){
    localStorage.removeItem("unit")
    localStorage.removeItem("qrcode")
    localStorage.removeItem("group")
    localStorage.removeItem("type")
    localStorage.removeItem("year")
    localStorage.removeItem("warranty")
    localStorage.removeItem("condition")
    window.location.href = "../index.html";
}