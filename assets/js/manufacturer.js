const manufacturers = [
    "Comenda", "Fagor", "Krupps", "Metos", "New"
]
let gridContainer = document.querySelector("#menu-list")
manufacturers.forEach(function(manufacturer){
    let imgName = manufacturer+"logo"
    gridContainer.innerHTML +=          
    `
    <div class="col-6 p-0">
        <div class="grid-item text-center ripple  pt-3" data-value="`+manufacturer+`">
            <img 
            src="../assets/images/logos/`+manufacturer+`.png" 
            onerror="this.onerror=null;this.src='../assets/images/logos/Default.png';"
            height="56px"
            id="`+imgName+`">
            <p class="grid-item-text">`+manufacturer+`</p>
        </div>
    </div>
    `
})

let items = document.querySelectorAll(".grid-item")
items.forEach(function(item){
    item.addEventListener("click", function(){
        let value = this.querySelector(".grid-item-text").innerHTML
        console.log(value)
        localStorage.setItem('manufacturer', value);
        setTimeout(function () {
            window.location.href = "./devicename.html";
        }, 400);
    })
})

// Input Label animation
let input = document.querySelector("#manufacturer-name")
let label = document.querySelector("#label")
input.addEventListener("focus",function(){
    label.classList.add("active");
});
input.addEventListener("keyup", function(){
    if (input.value !== "") {
        $('#nextBtn a').removeClass( 'disabled'); 
        localStorage.setItem('manufacturer', input.value);
    } else {
        $('#nextBtn a').addClass( 'disabled'); 
    }
})
input.addEventListener("focusout",function(){
    if (input.value === "")
    label.classList.remove("active");
});

let selectedunit = localStorage.getItem('unit');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedunit; 

if (localStorage.getItem("manufacturer") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
}

nextBtn.addEventListener("click", function(){
    input.value = ""
})

function onLogout(){
    localStorage.removeItem("unit")
    localStorage.removeItem("qrcode")
    localStorage.removeItem("group")
    localStorage.removeItem("type")
    localStorage.removeItem("year")
    localStorage.removeItem("warranty")
    localStorage.removeItem("condition")
    localStorage.removeItem("manufacturer")
    window.location.href = "../index.html";
}