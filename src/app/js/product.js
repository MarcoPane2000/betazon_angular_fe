// Animazione di fade-in per le recensioni
document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll(".single-review");
    reviews.forEach((review, index) => {
      setTimeout(() => {
        review.style.opacity = 1;
        review.style.transform = "translateY(0)";
      }, index * 200); // Ritardo di 200ms tra ogni recensione
    });
  });
  
  // Effetto di scorrimento per il pulsante "Torna indietro"
  document.querySelector(".button-back").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });