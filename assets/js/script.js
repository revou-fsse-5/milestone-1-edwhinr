// history
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// history

// manager
var modal1 = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

var modal2 = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var modal3 = document.getElementById('id03');

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

var modal4 = document.getElementById('id04');

window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}
// manager

// gallery
let galleryIndex = 1;
showGallery(galleryIndex);

function changeSlides(n) {
  showGallery(galleryIndex += n);
}

function setSlide(n) {
  showGallery(galleryIndex = n);
}

function showGallery(n) {
  let i;
  let slides = document.getElementsByClassName("gallery-slides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {galleryIndex = 1}
  if (n < 1) {galleryIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[galleryIndex-1].style.display = "block";
  dots[galleryIndex-1].className += " active";
  captionText.innerHTML = dots[galleryIndex-1].alt;
}
// gallery

// videos
function videoslider(links) {
  document.querySelector(".video-slider").src = links;
} 
// videos