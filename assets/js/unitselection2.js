const unit = {
    "country1": {
        "region1": {
            "city1": [
                "Restaurant1", "Restaurant2", "Restaurant3"
            ],
            "city2": [
                "Restaurant4", "Restaurant5"
            ]
        },
        "region2": {
            "city3": [
                "Restaurant6", "Restaurant7", "Restaurant8"
            ],
            "city4": [
                "Restaurant9", "Restaurant10"
            ]
        }
    },
    "country2": {
        "region3": {
            "city5": [
                "Restaurant11", "Restaurant12", "Restaurant13"
            ],
            "city6": [
                "Restaurant14", "Restaurant16"
            ]
        }
    }
}

window.addEventListener('load',  displayUnits(unit, 16));

function displayUnits(item, padding){
    let list = document.querySelector("#menu-list")
    Object.keys(item)
    .forEach(a => {
        let newPadding = padding + 8
        if (item[a] instanceof Object){
            list.innerHTML += 
            `
            <div class="list-item `+a+` text-muted">
                <span class="list-item-text">`+a+`</span>
            </div>
            `
            document.querySelector("."+a).style.paddingLeft = padding+"px"
            console.log(a)
            displayUnits(item[a], newPadding)
        } else {
            list.innerHTML += 
            `
            <div class="list-item `+item[a]+` ripple" data-value="`+item[a]+`">
                <span class="list-item-text">`+item[a]+`</span>
                <i class="fas fa-chevron-right list-item-icon"></i>
            </div>
            `
            document.querySelector("."+item[a]).style.paddingLeft = padding+"px"
            console.log(item[a])
        }
    });
}

let items = document.querySelectorAll(".ripple")
items.forEach(function(item){
    item.addEventListener("click", function(){
        let value = this.querySelector(".list-item-text").innerHTML
        console.log(value)
        localStorage.setItem('unit', value);
        setTimeout(function () {
            window.location.href = "./qrscanner.html";
        }, 400);
    })
})

if (localStorage.getItem("unit") !== null) {
    $('#nextBtn a').removeClass( 'disabled'); 
}

function onLogout(){
    localStorage.removeItem("unit")
    window.location.href = "../index.html";
}