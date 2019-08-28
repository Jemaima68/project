const groups = [
    "Coffee makers", "Cold drawers", "Cold storage cabinets and rooms", 
    "Dishwashers", "Distribution devices", "Icemakers",
    "Ovens", "Prefabrication devices", "Warm preparation devices",
    "Warm storage", "Others"
    ]
    let gridContainer = document.querySelector("#menu-list")
    groups.forEach(function(group){
        gridContainer.innerHTML += 
        `
        <div class="col-6 p-0">
            <div class="grid-item text-center ripple  pt-3" data-value="`+group+`">
                <img src="../assets/images/groups/`+group+`.png" 
                onerror="this.onerror=null;this.src='../assets/images/groups/Default.png';"
                height="56px">
                <p class="grid-item-text">`+group+`</p>
            </div>
        </div>
        `

    })

    let items = document.querySelectorAll(".grid-item")
    items.forEach(function(item){
        item.addEventListener("click", function(){
            let value = this.querySelector(".grid-item-text").innerHTML
            localStorage.setItem('group', value);
            setTimeout(function () {
                window.location.href = "./devicetype.html";
            }, 400);
        })
    })

    let selectedunit = localStorage.getItem('unit');
    let selectedUnit = document.querySelector("#unit-selected-text")
    selectedUnit.innerHTML = selectedunit; 

    if (localStorage.getItem("group") !== null) {
        $('#nextBtn a').removeClass( 'disabled'); 
    }

    function onLogout(){
        localStorage.removeItem("unit")
        localStorage.removeItem("qrcode")
        localStorage.removeItem("group")
        window.location.href = "../index.html";
    }