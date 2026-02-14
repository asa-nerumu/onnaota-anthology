/* ============================================
   AI Creative Report - Landing Page Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  // Smooth scrolling is handled by CSS scroll-behavior: smooth
  // No JS override needed — this preserves URL hash updates and browser back-button behavior
});
