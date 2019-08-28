// Input Label animation
let input = document.querySelector("#login-code")
let label = document.querySelector("#label")
input.addEventListener("focus",function(){
    label.classList.add("active");
});
input.addEventListener("focusout",function(){
    if (input.value === "")
    label.classList.remove("active");
});
// Language Selection
console.log($('.slide-selection').height())
function moveMarker() {
    let markerLeft = 0;
    let itemWidth;
    $('.slide-selection li').each(function(index, a) {
        let activeTest = $(a).hasClass('active');
        if(activeTest) {
            return false;
        }
        itemWidth = $('.language li').width()
        markerLeft = markerLeft + itemWidth;
    });
    let activeMarker = $('.active-marker');
    $(activeMarker).css('left', markerLeft);
}
moveMarker();

$('.slide-selection a').click(function(e) {
    e.preventDefault();
    $('.slide-selection li').removeClass('active');
    $(this).parents('li').addClass('active');
    moveMarker();
});

// Login
$(document).ready(function() {
$('#login-code').keydown(function(event){
    if(event.keyCode == 13) {
    event.preventDefault();
    login.click()
    }
});
});

let code = "555409"
let login = document.querySelector(".main-btn")
login.addEventListener("click", function(){
    // onLogin()
    if (input.value == "") {
        input.parentElement.classList.add("invalid");
        input.parentElement.querySelector(".error").innerHTML = `<i class="fas fa-exclamation-circle"></i> This field is required`
        label.classList.add("active");
    } else if (code != input.value) {
        input.parentElement.classList.add("invalid");
        input.parentElement.querySelector(".error").innerHTML = `<i class="fas fa-exclamation-circle"></i> Incorrect Login Code`
        label.classList.add("active");  
    } else {
        input.parentElement.classList.remove("invalid");
        input.value = ""
        loginForm.submit()
    }
})
// function onLogin() {
//     if (input.value == "") {
//         input.parentElement.classList.add("invalid");
//         input.parentElement.querySelector(".error").innerHTML = `<i class="fas fa-exclamation-circle"></i> This field is required`
//         label.classList.add("active");
//     } else {
//         fetch("http://192.168.254.101:3000/login", {
//             method: 'POST',
//             headers : {'Content-Type': 'application/json'},
//             body:JSON.stringify({"code": input.value})
//         })
//         .then((response) => response.json())
//         .then(responseJson => {
//             console.log(responseJson)
//             if ('token' in responseJson){
//                 input.parentElement.classList.remove("invalid");
//                 input.value = ""
//                 loginForm.submit()
//             } else {
//                 input.parentElement.classList.add("invalid");
//                 input.parentElement.querySelector(".error").innerHTML = responseJson["error"]
//                 label.classList.add("active"); 
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     }
// }