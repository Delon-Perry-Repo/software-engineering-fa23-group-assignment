// JavaScript Document
function validateEmail(email){
	var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var elEmailStatus = document.getElementById('emailStatus');
	elEmailStatus.classList.add("alert");
	if (email.value.match(validRegex)) {
		elEmailStatus.classList.remove("alert-danger");
		elEmailStatus.classList.add("alert-success");
		elEmailStatus.innerHTML = "Email is valid!";
	}
	else {elEmailStatus.classList.remove("alert-sucess");
		elEmailStatus.classList.add("alert-danger");
		elEmailStatus.innerHTML = "Email is not valid!";
	}
}

function validateName(name, statusElement) {
  var validRegex = /^[a-zA-Z-' ]*$/;
  statusElement.classList.add("alert");
  if (name.value.match(validRegex)) {
    statusElement.classList.remove("alert-danger");
    statusElement.classList.add("alert-success");
    statusElement.innerHTML = "Name is valid!";
  } else {
    statusElement.classList.remove("alert-success");
    statusElement.classList.add("alert-danger");
    statusElement.innerHTML = "Name is not valid!";
  }
}

function validatePhone(phone, statusElement) {
  var validRegex = /^[0-9]{10}$/;
  statusElement.classList.add("alert");
  if (phone.value.match(validRegex)) {
    statusElement.classList.remove("alert-danger");
    statusElement.classList.add("alert-success");
    statusElement.innerHTML = "Phone number is valid!";
  } else {
    statusElement.classList.remove("alert-success");
    statusElement.classList.add("alert-danger");
    statusElement.innerHTML = "Phone number is not valid!";
  }
}

function validateComments(comments, statusElement) {
  statusElement.classList.add("alert");
  if (comments.value.trim() !== "") {
    statusElement.classList.remove("alert-danger");
    statusElement.classList.add("alert-success");
    statusElement.innerHTML = "Comments are valid!";
  } else {
    statusElement.classList.remove("alert-success");
    statusElement.classList.add("alert-danger");
    statusElement.innerHTML = "Comments cannot be empty!";
  }
}


var elEmail = document.getElementById('email');
elEmail.addEventListener('blur', function() {validateEmail(elEmail);},false);

var elFirstName = document.getElementById('firstName');
var elFirstNameStatus = document.getElementById('firstNameStatus');
elFirstName.addEventListener('blur', function() {validateName(elFirstName, elFirstNameStatus);}, false);

var elLastName = document.getElementById('lastName');
var elLastNameStatus = document.getElementById('lastNameStatus');
elLastName.addEventListener('blur', function() {validateName(elLastName, elLastNameStatus);}, false);

var elPhone = document.getElementById('phone');
var elPhoneStatus = document.getElementById('phoneStatus');
elPhone.addEventListener('blur', function() {validatePhone(elPhone, elPhoneStatus);}, false);

var elComments = document.getElementById('comments');
var elCommentsStatus = document.getElementById('commentsStatus');
elComments.addEventListener('blur', function() {validateComments(elComments, elCommentsStatus);}, false);