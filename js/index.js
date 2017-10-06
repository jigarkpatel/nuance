
    function checkPhone() {
        var phone = document.forms["form"]["telephone"].value;
        var phoneNum = /\((\d{3})\)|(\d{3})[- ]?(\d{3})[-]?(\d{4})/;
            if(null!=phone.match(phoneNum)) {
                return true;
            }
            else {
                document.forms["form"]["telephone"].labels[0].textContent+=" - Invalid phone number";
                document.getElementById("telephone").className += " invalid";
                return false;
            }
        }
