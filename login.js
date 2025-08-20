function validateLoginForm() {
    let user = document.getElementById("id").value.trim();
    let password = document.getElementById("password").value.trim();

    if (user === "" || password === "") {
        alert("Username cannot be empty.");
        return false;
    }
        return true;
    }
