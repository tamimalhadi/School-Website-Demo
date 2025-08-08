
document.addEventListener('DOMContentLoaded', () => {
  // Demo form handler
  document.querySelectorAll('form.demo').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      alert('ফর্মটি ডেমো মোডে প্রেরণ করা হয়েছে। (Demo submission)');
    });
  });

  // Hamburger menu toggle
  document.querySelectorAll('.menu-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const nav = toggle.previousElementSibling; // nav is right before the button
      if (nav && nav.classList.contains('nav')) {
        nav.classList.toggle('show');
      }
    });
  });
});
