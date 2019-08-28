const types = {
    "Coffee makers": [
    "Drip Coffee Makers", "Thermal Coffee Makers",
    "Espresso machines", "Percolators",
    "Siphon Coffee Makers", "French Press Coffee Makers", 
    "AeroPress", "Cold Brew Coffee Makers", 
    "Moka Pot Coffee Makers"
    ], 
    "Cold drawers": [
    "Bartender's Tables", "Cold foods preparer's table", "Drink Drawers",
    "Foodstuff drawers", "Grill Drawers", "Pizza Tables", "Others"
    ], 
    "Cold storage cabinets and rooms": [
    "Reach-In Coolers/Refrigerator", "Freezer", "Walk-in cold room", 
    "Industrial chiller", "Others"
    ], 
    "Dishwashers": [
    "Conveyor dishwashers", "Door type dishwashers",
    "Hood dishwashers", "Pot dishwashers", "Others"
    ], 
    "Distribution devices": [
    "Buffet", "Glass cabinets", "Tray lines", "Wine Cabinets", "Others"
    ], 
    "Icemakers": [
    "Portable & Countertop Ice Maker", "Built-In & Undercounter Ice Maker", 
    "Modular Ice Machine", "Self-Contained Ice Machine", "Others"
    ],
    "Ovens": [
    "Gas Oven", "Electric Oven", "Conduction Oven", "Convection Oven",
    "Pizza Oven", "Microwave Oven", "Roaster Oven", "Toaster Oven", 
    "TurboChef Ovens", "Others"
    ], 
    "Prefabrication devices": [
    "Circulators", "Cold cut machines", "Cutters", "General purpose machines",
    "Vacuum machines", "Vegetable cutters", "Others"
    ], 
    "Warm preparation devices": [
    "Deep fryers", "Stoves", "Pots", "Grills", "Others"
    ],
    "Warm storage": [
    "Countertop Warmer", "Heated Banquet and Transport Cart", 
    "Plate Warmer", "Overhead Warmer", "Drawer Warmer", "Proofing and Holding Cabinet", 
    "Heated Dispenser", "Steam Table", "Heated Merchandiser", "Bun Warmer", 
    "Restaurant Range Bain Marie", "Towel Warmer"
    ],
    "Others": []
}

// window.addEventListener('load', displayTypes());

let selectedunit = localStorage.getItem('unit');
let selectedUnit = document.querySelector("#unit-selected-text")
selectedUnit.innerHTML = selectedunit; 

let selectedGroup = localStorage.getItem('group');
let selectedTypes = types[selectedGroup]
let listContainer = document.querySelector("#menu-list") 
// console.log(selectedTypes)
if (selectedTypes.length == 0) {
    listContainer.innerHTML += 
        `
            <div class="list-item ripple" data-value="None">
                <i class="fas fa-chevron-right list-item-icon"></i>
                <span>
                    <p class="list-item-text">None</p>
                <span>
            </div>
        `
} else {
    selectedTypes.forEach(function(type){
        listContainer.innerHTML += 
            `
                <div class="list-item ripple" data-value="`+type+`">
                    <i class="fas fa-chevron-right list-item-icon"></i>
                    <span>
                        <p class="list-item-text">`+type+`</p>
                    <span>
                </div>
            `
    })
}


let items = document.querySelectorAll(".list-item")
items.forEach(function(item){
    item.addEventListener("click", function(){
        let value = this.querySelector(".list-item-text").innerHTML
        localStorage.setItem('type', value);
        setTimeout(function () {
            window.location.href = "./purchaseyear.html";
        }, 400);
    })
})

if (localStorage.getItem("type") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
}

function onLogout(){
    localStorage.removeItem("unit")
    localStorage.removeItem("qrcode")
    localStorage.removeItem("group")
    localStorage.removeItem("type")
    window.location.href = "../index.html";
}