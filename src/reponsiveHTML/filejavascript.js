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
// var slide_index = 1;
// displaySlides(slide_index);

// function nextSlide(n) {
//     displaySlides(slide_index += n);
// }

// function currentSlide(n) {
//     displaySlides(slide_index = n);
// }
// function displaySlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("carousel-item");
//   console.log(slides);
//   console.log("slides  " + slides +slides.length);
//   if (n > slides.length) { slide_index = 1 }
//   if (n < 1) { slide_index = slides.length }
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slide_index - 1].style.display = "block";
// }
let slide_index = 1;
displaySlide(slide_index);
function nextSlide(n) {
  displaySlide((slide_index += n));
}
function displaySlide(n) {
  let i = 0;
  let slides = document.getElementsByClassName("carousel-item");
  console.log("slide_index " + slide_index);
  console.log("length:" + slides.length);
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}
