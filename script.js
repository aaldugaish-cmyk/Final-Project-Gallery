var galleryImages = document.querySelectorAll('#gallery img');
var mainImage = document.getElementById('main-image');

// Mouse events
function handleMouseOver(event) {
  event.target.classList.add('highlight');
}

function handleMouseLeave(event) {
  event.target.classList.remove('highlight');
}

// Focus events (Step 6)
function handleFocus(event) {
  event.target.classList.add('highlight');
}

function handleBlur(event) {
  event.target.classList.remove('highlight');
}

// Change main image
function changeMainImage(event) {
  mainImage.src = event.target.src;
  mainImage.alt = event.target.alt;
}

// Add listeners to each image
function addImageListeners() {
  for (var i = 0; i < galleryImages.length; i++) {
    var img = galleryImages[i];

    img.addEventListener('mouseover', handleMouseOver);
    img.addEventListener('mouseleave', handleMouseLeave);

    img.addEventListener('focus', handleFocus);
    img.addEventListener('blur', handleBlur);

    img.addEventListener('click', changeMainImage);

    img.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        changeMainImage(event);
      }
    });
  }
}

// Step 9 — add tabindex attributes
function addTabFocus() {
  console.log("Tab focus function triggered"); // 9a

  for (var i = 0; i < galleryImages.length; i++) { // 9b
    galleryImages[i].setAttribute('tabindex', '0'); // 9c
  }
}

// Step 8 — onload listener
window.onload = function() {
  addTabFocus();
  addImageListeners();
};