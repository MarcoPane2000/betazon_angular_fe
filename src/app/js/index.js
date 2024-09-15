document.addEventListener("DOMContentLoaded", function() {
  const logo = document.querySelector('.logo-bet-grande');
  const products = document.querySelectorAll('.product');
  const services = document.querySelectorAll('.service');
  const shippingLogo = document.querySelector('.shipping-logo');

  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;

      // Riduci la dimensione del logo e spostalo verso il basso mentre scorri
      if (scrollPosition > 0) {
          logo.style.transform = `scale(${Math.max(1 - scrollPosition / 3000, 0)}) translateY(${Math.min(scrollPosition / 2, 500)}px)`; // Dimensione e posizione
          logo.style.opacity = `${Math.max(1 - scrollPosition / 500, 0)}`; // Opacità
          logo.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      } else {
          logo.style.transform = 'scale(1) translateY(0)';
          logo.style.opacity = '1';
      }

      // Animazione di fade-in per i prodotti durante lo scroll
      products.forEach(product => {
          const productPosition = product.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (productPosition < screenPosition) {
              product.style.opacity = '1';
              product.style.transform = 'translateY(0)';
              product.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
          }
      });

      // Animazione di fade-in per i servizi durante lo scroll
      services.forEach(service => {
          const servicePosition = service.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (servicePosition < screenPosition) {
              service.style.opacity = '1';
              service.style.transform = 'translateY(0)';
              service.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
          }
      });

      // Animazione per il logo delle spedizioni
      const logoPosition = shippingLogo.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (logoPosition < screenPosition) {
          shippingLogo.style.animation = 'slideIn 1s ease-out forwards';
      }
  });
});
