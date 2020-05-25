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

// let slide_index = 1;
// displaySlide(slide_index);
// function nextSlide(index_slide_next) {
//   console.log("left");

//   let slides_next = document.getElementsByClassName("slide-update");
//   for (let i = 0; i < slides_next.length; i++) {
//     slides_next[i].style.animationName = "show_slide-left";
//   }

//   displaySlide((slide_index += index_slide_next));
// }
// function prevSlide(index_slide_next) {
//   console.log("right");
//   let slides_prev = document.getElementsByClassName("slide-update");

//   for (let i = 0; i < slides_prev.length; i++) {
//     slides_prev[i].style.animationName = "show_slide_right";
//   }

//   displaySlide((slide_index += index_slide_next));
// }
// function displaySlide(index_slide_next) {
//   let i = 0;
//   let slides = document.getElementsByClassName("carousel-item");
//   console.log("slide_index " + slide_index);
//   console.log("length:" + slides.length);
//   if (index_slide_next > slides.length) {
//     slide_index = 1;
//   }
//   if (index_slide_next < 1) {
//     slide_index = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slide_index - 1].style.display = "block";
// }

let slides_container = document.getElementById("sharing-carousel");
let slides = document.querySelectorAll(".carousel-item");

function prevSlide() {
  let element = document.querySelector(".carousel-item");
  document.getElementById("sharing-carousel").style.transitionDuration = "1.5s";
  document.getElementById("sharing-carousel").style.left = "-100%";
  setTimeout(function () {
    slides_container.removeChild(element);
    slides_container.appendChild(element);
    document.getElementById("sharing-carousel").style.transitionDuration = "0s";
    document.getElementById("sharing-carousel").style.left = "0%";
  }, 1500);
}

function nextSlide() {
  console.log("asdas");
  const elCarousel = document.getElementById("sharing-carousel");

  let element = document.querySelector(".carousel-item");
  slides_container.appendChild(element);

  elCarousel.style.transitionDuration = "0s";
  elCarousel.style.left = "-100%";
  setTimeout(function () {
    elCarousel.style.transitionDuration = "1.5s";
    elCarousel.style.left = "0%";
  }, 10);
}
