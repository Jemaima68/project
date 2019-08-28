const currentYear = new Date().getFullYear()
        let list = document.querySelector("#menu-list") 
        for(gap=0; gap<9; gap++) {
            let year = currentYear-gap
            list.innerHTML += 
                `
                    <div class="list-item ripple" data-value="`+year+`">
                        <i class="fas fa-chevron-right list-item-icon"></i>
                        <span>
                            <p class="list-item-text">`+year+`</p>
                        <span>
                    </div>
                `
        }

        let dp = DatePicker("rgb(31, 116, 69)");

        // Set Button Click Listener
        $("#date-button").click(function() {
            let date = new Date();
            dp.show(date, function(selected) {
                let date = selected.toLocaleDateString()
                console.log(date)
                localStorage.setItem('year', date);
                setTimeout(function () {
                    window.location.href = "./warranty.html";
                }, 400);
            });
        });

        let items = document.querySelectorAll(".list-item")
        items.forEach(function(item){
            item.addEventListener("click", function(){
                let value = this.querySelector(".list-item-text").innerHTML
                console.log(value)
                localStorage.setItem('year', value);
                setTimeout(function () {
                    window.location.href = "./warranty.html";
                }, 400);
            })
        })

        let selectedunit = localStorage.getItem('unit');
        let selectedUnit = document.querySelector("#unit-selected-text")
        selectedUnit.innerHTML = selectedunit; 

        if (localStorage.getItem("year") !== null) {
            $('#nextBtn a').removeClass( 'disabled'); 
        }

        function onLogout(){
            localStorage.removeItem("unit")
            localStorage.removeItem("qrcode")
            localStorage.removeItem("group")
            localStorage.removeItem("type")
            localStorage.removeItem("year")
            window.location.href = "../index.html";
        }