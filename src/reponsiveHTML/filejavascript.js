function consoleForm(e) {
  e.preventDefault();
  console.log(e);
  
  let inputName = document.getElementById("cardName").value;
  if (!inputName) {
    document.getElementById("messageErrorName").innerHTML = "Error empty value";
  } else {
    console.log(inputName);
    document.getElementById("messageErrorName").innerHTML = "";
  }
  let inputEmail = document.getElementById("cardEmail").value;
  if (!inputEmail) {
    document.getElementById("messageErrorEmail").innerHTML =
      "Error empty value";
  } else {
    console.log(inputEmail);
    document.getElementById("messageErrorEmail").innerHTML = "";
  }

  let inputPassword = document.getElementById("cardPassword").value;
  if (!inputPassword) {
    document.getElementById("messageErrorPassword").innerHTML =
      "Error empty value";
  } else if (inputPassword.length < 8) {
    document.getElementById("messageErrorPassword").innerHTML =
      "Password must be over 8 ";
  } else {
    console.log(inputPassword);
    document.getElementById("messageErrorPassword").innerHTML = "";
    document.getElementById("messageSuccess").innerHTML =
      "Login in successfully";
  }
}
