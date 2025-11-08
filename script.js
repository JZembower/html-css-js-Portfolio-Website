function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Simple stagger reveal based on --i variable already present in markup
document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post-card');
  posts.forEach((card, idx) => {
    card.style.setProperty('--i', idx);
    // small timeout to ensure animation triggers reliably
    setTimeout(() => card.classList.remove('preload'), 10);
  });

  // Example: simple tag filter function (call filterByTag('ML') to use)
  window.filterByTag = (tag) => {
    posts.forEach(card => {
      const tags = card.getAttribute('data-tags') || '';
      const visible = tag === 'all' || tags.includes(tag);
      card.style.display = visible ? '' : 'none';
    });
  };
});