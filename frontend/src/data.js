import ScrollReveal from 'scrollreveal';

export function initializeScrollAnimations() {
  // ScrollReveal configuration
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
  });

  // Reveal elements
  sr.reveal('.topheading', { delay: 100 });
  sr.reveal('.bottomheading', { delay: 200 });
  sr.reveal('.wrapper', { delay: 300 });
  sr.reveal('.button', { delay: 400 });
  sr.reveal('.button', { delay: 500 });
  sr.reveal('.button', { delay: 600 });

  
  sr.reveal('.headingfalcon,.subheadingfalcon,.headingfalcon3', { delay: 100 });

  sr.reveal('.merlin-engine-container', { delay: 200 });
  sr.reveal('.text5', { delay:100 });
 



  // Menu item click behavior
  const menuItems = document.querySelectorAll('.menu-item');
  const navToggle = document.getElementById('nav-toggle');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navToggle) {
        navToggle.checked = false;
      }
    });
  });

  // Scroll to top on logo click
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}