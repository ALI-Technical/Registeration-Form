function changeMode() {
    var icon = document.getElementById("moon-icon");
    var body = document.getElementById("body");
    var container = document.getElementById("container");
    var mainHeading = document.getElementById("main-heading");
    var btn = document.getElementById("Sign-Up-btn");
    var btn_2 = document.getElementById("btn-2");
    var eyeIcons = document.getElementsByTagName("i");
    if(icon.className =="fas fa-moon"){
        eyeIcons[1].style.color="#000"
        eyeIcons[2].style.color="#000"
        icon.className="far fa-moon";
        body.className="black-body";
        container.className+=" container-2";
        mainHeading.className="main-heading-2";
        btn.setAttribute("id","btn-2");
    }
    else{
        icon.className="fas fa-moon";
        body.removeAttribute("class");
        container.className="container";
        mainHeading.className="main-heading";
        btn_2.id="Sign-Up-btn";
    }
}

function showPassword(e) {
    var passInput = document.getElementById("passInput");

    if(e.className=="far fa-eye"){
        e.className="far fa-eye-slash";
        passInput.type="text";
    }
    else{
        e.className="far fa-eye";
        passInput.type="password";
    }
}

function cnfmPassword(e) {
    var cnfmPass = document.getElementById("cnfmPass");

    if(e.className=="far fa-eye"){
        e.className="far fa-eye-slash";
        cnfmPass.type="text";
    }
    else{
        e.className="far fa-eye";
        cnfmPass.type="password";
    }
}

function login() {
    var username = document.getElementById("Username");
    var password = document.getElementById("password");

    if(username.value!="" && password.value!=""){
        alert(username.value + " Welcome");
    }
    else{
        username.placeholder="Example: ali@gmail.com"
    }
}