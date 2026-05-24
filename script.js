const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

cards.forEach(c => {
  c.style.opacity = 0;
  c.style.transform = "translateY(20px)";
  c.style.transition = "0.8s ease";
  observer.observe(c);
});
