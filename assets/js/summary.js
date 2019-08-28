const items = [
    "unit", "group", "type", 
    "year", "warranty", "condition", 
    "manufacturer", "model", "devicename", "value", "images"
]      
const summary = [
    "unit", "group", "type", 
    "year", "warranty", "condition", 
    "manufacturer", "model", "devicename", "value",
]      

let listContainer = document.querySelector("#menu-list")
function showItem(item){
    let result = localStorage.getItem(item)
    listContainer.innerHTML += 
        `
            <div class="layer-list-item ripple">
                <span>
                    <p class="list-item-subtext text-muted">`+item+`</p>
                    <p class="list-item-maintext">`+result+`</p>
                <span>
            </div>
        `
}
summary.forEach(function(item){
    showItem(item)
})
listContainer.innerHTML += 
    `
        <div class="image-list-item ripple">
            <span>
                <p class="list-item-subtext text-muted">image(s)</p>
                <div id="imgPreview"></div>
            <span>
        </div>
    `
let images = JSON.parse(localStorage.getItem("images"))
images.forEach(function(image){
    imgPreview.innerHTML += 
    `
    <img src="`+image+`" height="100" alt="Image preview..." class="p-2">
    `
})

function register() {
    let formData = {
        "unit" : localStorage.getItem("unit"),
        "group" : localStorage.getItem("group"),
        "type" : localStorage.getItem("type"),
        "year" : localStorage.getItem("year"),
        "warranty" : localStorage.getItem("warranty"),
        "condition" : localStorage.getItem("condition"),
        "manufacturer" : localStorage.getItem("manufacturer"),
        "model" : localStorage.getItem("model"),
        "devicename" : localStorage.getItem("devicename"),
        "value" : localStorage.getItem("value"),
        "image" : localStorage.getItem("image"),
    }
    console.log(formData)
    $('#alert').modal('toggle');
}

function onLogout(){
    items.forEach(function(item){
        localStorage.removeItem("item")
    })
    window.location.href = "../index.html";
}

function onRegister(){
    items.forEach(function(item){
        localStorage.removeItem("item")
    })
    window.location.href = "./unitselection.html";
}