function CheckPassword(inputtxt) {
  var decimal =
    /^(?=.*[@])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,20}$/;
  if (inputtxt.value.match(decimal)) {
    var str2 = "SmartServTest@123";
    var n = inputtxt.value.localeCompare(str2);
    if (n == 0) {
      window.location.href = "dashboard.html";
      return false;
    } else {
      alert("Password valid!");
    }
    return true;
  } else {
    alert(
      "The password should have a minimum of one capital letter, one small letter, one number, and the special character @."
    );
    return false;
  }
}

function checkEmail() {
  var email = document.getElementById("email");
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert("Please provide a valid username in form of E-Mail");
    email.focus;
    return false;
  }
}
