let userLogged = false;
const formData = document.getElementById("newAccount");

formData.addEventListener("submit", (e) =>{
    e.preventDefault();
    alert("User has been created successfully.");
})

const logForm = document.getElementById("login");

logForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let userName = document.getElementById("uname").value;
    let userPass = document.getElementById("psw").value;

    if(userName != "" && userPass != ""){
        
        userLogged = true;
        location.replace("/accountLog.html");
       
    }else{
        alert("Either your username or password was incorrect!");
    }
})

function toggleTextField(id) {
    var textField = document.getElementById(id);
    textField.classList.toggle('hidden');
}

function submitText(type) {
   if(type == "uname"){
    alert("Account Information: Username has been updated.");
   }else{
    alert("Account Information: Email has been updated.");
   }
}