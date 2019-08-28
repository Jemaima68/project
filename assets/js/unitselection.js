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
                "Restaurant14", "Restaurant15"
            ]
        }
    }
}

window.addEventListener('load', getUnit(unit));

function getPath(obj, val, path) {
    let listContainer = document.querySelector("#menu-list") 
    path = path || "";
    let fullpath = "";
    for (let b in obj) {
        if (obj[b] === val) {
            listContainer.innerHTML += 
                `
                    <div class="layer-list-item ripple" data-value="`+val+`">
                        <i class="fas fa-chevron-right layered-list-item-icon"></i>
                        <span>
                            <p class="list-item-maintext">`+val+`</p>
                            <p class="list-item-subtext text-muted">`+path+`</p>
                        <span>
                    </div>
                `
        }
        else if (typeof obj[b] === "object") {
            if (path == "") fullpath = getPath(obj[b], val, b) || fullpath;
            else fullpath = getPath(obj[b], val, path + ", " + b) || fullpath;
        }
    }
    return fullpath;
}

let list = document.querySelector("#menu-list")
function getUnit(location){ 
    Object.keys(location)
    .forEach(a => {
        if (location[a] instanceof Object){
            console.log(a)
            // location += ", " + a
            getUnit(location[a])
            // console.log(location[a])
        } else {
            getPath(unit, location[a])
            console.log(location[a])
        }
    });
}

let items = document.querySelectorAll(".layer-list-item")
items.forEach(function(item){
    item.addEventListener("click", function(){
        let value = this.querySelector(".list-item-maintext").innerHTML
        console.log(value)
        localStorage.setItem('unit', value);
        setTimeout(function () {
            window.location.href = "./unitselection2.html";
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