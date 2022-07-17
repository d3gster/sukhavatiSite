var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n>slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex=slides.length
  }
  for (i=0; i < slides.length; i++) {
    slides[i].style.display= "none";
  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active","");
  
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+= " active";
}




var slideindex = 1;
showSlidesS(slideindex);
function plusSlidesS(n) {
  showSlidesS(slideindex += n);
}


function showSlidesS(n) {
  var i;
  var slidess = document.getElementsByClassName("mySlidesD");
  var dots = document.getElementsByClassName("dots");

  if (n>slidess.length) {
    slideindex = 1
  }
  if (n < 1) {
    slideindex=slidess.length
  }
  for (i=0; i < slidess.length; i++) {
    slidess[i].style.display= "none";
  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active","");
  
  }
  slidess[slideindex-1].style.display = "block";
}