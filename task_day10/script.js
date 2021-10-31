//menggunakan validation dari bootstrap
(function () {
    "use strict";

    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

function setvalues() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var nationality = document.getElementById("nationality").value;
    var message = document.getElementById("message").value;

    localStorage.setItem("valuename", fullname);
    localStorage.setItem("valuemeail", email);
    localStorage.setItem("valuephone", phonenumber);
    localStorage.setItem("valuenationality", nationality);
    localStorage.setItem("valuemessage", message);
    return false;
}

function showvalues() {
    document.getElementById("result-name").innerHTML =
        localStorage.getItem("valuename");

    document.getElementById("result-email").innerHTML =
        localStorage.getItem("valuemeail");

    document.getElementById("result-phone").innerHTML =
        localStorage.getItem("valuephone");

    document.getElementById("result-nationality").innerHTML =
        localStorage.getItem("valuenationality");

    document.getElementById("result-message").innerHTML =
        localStorage.getItem("valuemessage");
}
