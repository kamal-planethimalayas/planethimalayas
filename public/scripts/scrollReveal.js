// public/scripts/scrollReveal.js

export function initScrollReveal() {
  const revealElements = () => {
    const reveals = document.querySelectorAll(".reveal:not(.visible)");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
  };

  // Initial reveal on page load
  revealElements();

  // Re-observe for dynamically added content
  const mutationObserver = new MutationObserver(revealElements);
  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

// Auto-init only in the browser
if (typeof window !== "undefined") {
  initScrollReveal();
}
