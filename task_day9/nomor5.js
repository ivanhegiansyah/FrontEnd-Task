//nomor 5
function formVerification() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmedPassword = document.getElementById("confirmpassword").value;
    let email = document.getElementById("email").value;
    let confirmedEmail = document.getElementById("confirmemail").value;

    if (
        username === "" ||
        password === "" ||
        confirmedPassword === "" ||
        email === "" ||
        confirmedEmail === ""
    ) {
        alert("Seluruh input harus diisi");
    } else {
        if (password !== confirmedPassword) {
            alert("Password tidak sama dengan confirm password");
        } else if (email !== confirmedEmail) {
            alert("Email tidak sama dengan confirm email");
        } else {
            alert("Berhasil Register");
        }
    }
}
