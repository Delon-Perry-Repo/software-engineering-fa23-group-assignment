function checkFieldEmail(textField) {

  var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var elEmailStatus = document.getElementById("emailStatus");
  elEmailStatus.classList.add("alert");

  if ((textField.value != null) && validRegex.test(textField.value)) {
    elEmailStatus.classList.remove("alert-failure");
    elEmailStatus.classList.add("alert-success");
    elEmailStatus.innerHTML = "Email Address Is Valid!";
    return true;
  } else {
    elEmailStatus.classList.remove("alert-success");
    elEmailStatus.classList.add("alert-failure");
    elEmailStatus.innerHTML = "Email Address Is Invalid!";
    return false;
  }
}

function checkFieldUserName(textField) {

  var validRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  var elUserStatus = document.getElementById("userStatus");
  elUserStatus.classList.add("alert");

  if ((textField.value != null) && validRegex.test(textField.value)) {
    elUserStatus.classList.remove("alert-failure");
    elUserStatus.classList.add("alert-success");
    elUserStatus.innerHTML = "Username Is Valid!";
    return true;
  } else {
    elUserStatus.classList.remove("alert-success");
    elUserStatus.classList.add("alert-failure");
    elUserStatus.innerHTML = "Username Is Invalid - Only Alphanumeric or Underscores Allowed (Min: 8 Max: 20)!";
    return false;
  }
}

function checkFieldPassword(textField) {

  var validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  var elPassStatus = document.getElementById("passStatus");
  elPassStatus.classList.add("alert");

  if ((textField.value != null) && validRegex.test(textField.value)) {
    elPassStatus.classList.remove("alert-failure");
    elPassStatus.classList.add("alert-success");
    elPassStatus.innerHTML = "Password Is Valid!";
    return true;
  } else {
    if (textField.value == "") {
      elPassStatus.classList.remove("alert-success");
      elPassStatus.classList.add("alert-failure");
      elPassStatus.innerHTML = "Password Can Not Be Left Blank!";
      return false;
    }
    elPassStatus.classList.remove("alert-success");
    elPassStatus.classList.add("alert-failure");
    elPassStatus.innerHTML = "Password Is Invalid - Minimum Eight And Maximum 20 Characters, At Least One Uppercase Letter, One Lowercase Letter, One Number, And One Special Character!";
    return false;
  }
}

function confirmPassword(firstInput, secondInput) {

  var elPassStatusConf = document.getElementById("confPassStatus");
  elPassStatusConf.classList.add("alert");

  if (firstInput.value === secondInput.value) {
    if (secondInput.value == "") {
      elPassStatusConf.classList.remove("alert-success");
      elPassStatusConf.classList.add("alert-failure");
      elPassStatusConf.innerHTML = "Password Can Not Be Left Blank!";
      return false;
    }
    elPassStatusConf.classList.remove("alert-failure");
    elPassStatusConf.classList.add("alert-success");
    elPassStatusConf.innerHTML = "Passwords Match!";
    return true;
  } else {
    elPassStatusConf.classList.remove("alert-success");
    elPassStatusConf.classList.add("alert-failure");
    elPassStatusConf.innerHTML = "Passwords Don't Match!";
    return false;
  }

}

var userEmail = document.getElementById('newemail');
var userName = document.getElementById('newuname');
var userPassword = document.getElementById('newpsw');
var userPasswordConf = document.getElementById('confirmnewpsw');

userEmail.addEventListener('blur', function () {
  checkFieldEmail(userEmail);
}, false);

userName.addEventListener('blur', function () {
  checkFieldUserName(userName);
}, false);

userPassword.addEventListener('blur', function () {
  checkFieldPassword(userPassword);
}, false);

userPasswordConf.addEventListener('blur', function () {
  confirmPassword(userPassword, userPasswordConf);
}, false);