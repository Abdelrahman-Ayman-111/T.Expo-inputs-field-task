let submit = document.getElementById("submit")
let username = document.getElementById("username")
let password = document.getElementById("password")

submit.onclick = function(){
    if(username.value.trim() !== "" && password.value.trim() !== ""){
        username.value = "";
        password.value = "";
    }
}