let dp = DatePicker("rgb(31, 116, 69)");
        $("#date-button").click(function() {
            let date = new Date();
            dp.show(date, function(selected) {
                let date = selected.toLocaleDateString()
                console.log(date)
                localStorage.setItem('warranty', date);
                setTimeout(function () {
                    window.location.href = "./devicecondition.html";
                }, 400);
            });
        });

        function invalid() {
            localStorage.setItem('warranty', "not valid");
            setTimeout(function () {
                window.location.href = "./devicecondition.html";
            }, 400);
        }

        let selectedunit = localStorage.getItem('unit');
        let selectedUnit = document.querySelector("#unit-selected-text")
        selectedUnit.innerHTML = selectedunit; 

        if (localStorage.getItem("warranty") !== null) {
            $('#nextBtn a').removeClass( 'disabled'); 
        }

        function onLogout(){
            localStorage.removeItem("unit")
            localStorage.removeItem("qrcode")
            localStorage.removeItem("group")
            localStorage.removeItem("type")
            localStorage.removeItem("year")
            localStorage.removeItem("warranty")
            window.location.href = "../index.html";
        }