let images = [];
        let preview = document.querySelector('#preview'); 
        function previewFile(){
        preview.innerHTML += ""
        let files = document.querySelector('input[type=file]').files; 

            console.log(files[0])
            for (i=0; i<(files.length && 5); i++){
                read(files[i])

            }
        }
        function read(file){

            let reader  = new FileReader();
            reader.onloadend = function () {
                preview.innerHTML += 
                `
                    <img src="`+reader.result+`" height="100" alt="Image preview..." class="p-2">
                `
                images.push(reader.result)
                console.log(images)
                localStorage.setItem('images', JSON.stringify(images));
            }

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    
        // Input Label animation
        let inputs = document.querySelectorAll(".form-control")
        inputs.forEach(function(input){
            let label = input.parentElement.querySelector(".label")
            input.addEventListener("focus",function(){
                label.classList.add("active");
            });
            input.addEventListener("focusout",function(){
                if (input.value === "")
                label.classList.remove("active");
            });
        })

        let imageBtn = document.querySelector("#image-button")
        imageBtn.addEventListener("click", function(){
            addImg.click()
        })

        window.addEventListener("keyup", function(){
            if (model.value !== "" && devicename.value !== "") {
                $('#nextBtn a').removeClass( 'disabled'); 
                localStorage.setItem('model', model.value);
                localStorage.setItem('devicename', devicename.value);
                // if(purchaseValue.value !== "") localStorage.setItem('value', purchaseValue.value);
                // else localStorage.setItem('value', "-");
            } else {
                $('#nextBtn a').addClass( 'disabled'); 
            }
            console.log(localStorage.getItem("devicename"), localStorage.getItem("model"))
        })

        let selectedunit = localStorage.getItem('unit');
        let selectedUnit = document.querySelector("#unit-selected-text")
        selectedUnit.innerHTML = selectedunit; 

        if (localStorage.getItem("model") !== null && localStorage.getItem("devicename") !== null) {
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
            localStorage.removeItem("model")
            localStorage.removeItem("devicename")
            localStorage.removeItem("value")
            localStorage.removeItem("images")
            window.location.href = "../index.html";
        }