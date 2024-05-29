const images = document.querySelectorAll('.image');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const overlayText = document.getElementById('overlay-text');
const overlayDescription = document.getElementById('overlay-description');

images.forEach(image => {
    image.addEventListener('click', () => {
        overlayImage.src = image.src;
        overlayText.innerText = image.alt;
        overlayDescription.innerText = ""; 
        overlay.style.display = 'flex';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});

overlayImage.addEventListener('click', () => {
    overlayDescription.innerText = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"; // Agregar texto explicativo
});
$(document).ready(function () {
    $(".video-gallery").magnificPopup({
      delegate: "a",
      type: "iframe",
      gallery: {
        enabled: true
      }
    });
});
