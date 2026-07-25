const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("pd-in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("[data-reveal], [data-stagger]").forEach(el => io.observe(el));
