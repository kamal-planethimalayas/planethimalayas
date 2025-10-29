// src/scripts/scrollReveal.js
export function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach((el) => observer.observe(el));

  // Re-observe for dynamically loaded content
  const observerConfig = { childList: true, subtree: true };
  const mutationObserver = new MutationObserver(() => {
    const newReveals = document.querySelectorAll(".reveal:not(.visible)");
    newReveals.forEach((el) => observer.observe(el));
  });

  mutationObserver.observe(document.body, observerConfig);
}

// Auto-init if running on client
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initScrollReveal);
}
