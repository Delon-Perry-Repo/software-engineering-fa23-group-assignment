
var authUsers = new Array();

function authUser(user, pw){
  this.user = user; 
  this.pw = pw; 
}

var sam = new authUser("slagman", "CS3773.002.5");
var zachary = new authUser("zsierra", "CS3773.002.5");
var coy = new authUser("cburrows", "CS3773.002.5");
var tommy = new authUser("thale", "CS3773.002.5");
var delon = new authUser("dperry", "CS3773.002.5");

authUsers.push(sam);
authUsers.push(zachary);
authUsers.push(coy);
authUsers.push(tommy);
authUsers.push(delon);


function login(){

  var user = document.getElementById("username").value; 
  var pw = document.getElementById("password").value;
  
  for(let i = 0; i < authUsers.length; i++){
    if (user === authUsers[i].user && pw === authUsers[i].pw ){
      open("admin.html", "_self");
      break;
    } else{
      document.getElementById("test").innerText = "Incorrect username and/or password.";
    }
      
  }
}

    
    

function test(){
  document.getElementById("test").innerText = "Hey";
}
