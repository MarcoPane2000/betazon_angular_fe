import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {
    this.initScrollEffects();
    this.initClickableCards();
  }

  initScrollEffects() {
    const logo = document.querySelector('.logo-bet-grande') as HTMLElement;
    const products = document.querySelectorAll('.product') as NodeListOf<HTMLElement>;
    const services = document.querySelectorAll('.service') as NodeListOf<HTMLElement>;
    const shippingLogo = document.querySelector('.shipping-logo') as HTMLElement;

    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

      // Logo scaling and positioning
      if (scrollPosition > 0) {
        logo.style.transform = `scale(${Math.max(1 - scrollPosition / 3000, 0)}) translateY(${Math.min(scrollPosition / 2, 500)}px)`;
        logo.style.opacity = `${Math.max(1 - scrollPosition / 500, 0)}`;
        logo.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      } else {
        logo.style.transform = 'scale(1) translateY(0)';
        logo.style.opacity = '1';
      }

      // Fade-in effects for products and services
      products.forEach(product => {
        const productPosition = product.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (productPosition < screenPosition) {
          product.style.opacity = '1';
          product.style.transform = 'translateY(0)';
          product.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        }
      });

      services.forEach(service => {
        const servicePosition = service.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (servicePosition < screenPosition) {
          service.style.opacity = '1';
          service.style.transform = 'translateY(0)';
          service.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        }
      });

      // Shipping logo animation
      const logoPosition = shippingLogo.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (logoPosition < screenPosition) {
        shippingLogo.style.animation = 'slideIn 1s ease-out forwards';
      }
    });
  }

  initClickableCards() {
    const cards = document.querySelectorAll('.clickable-card');
    cards.forEach(card => {
      card.addEventListener('click', function (this: HTMLElement) {
        const url = this.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      });
    });
  }
}
