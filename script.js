document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('load', () => {
    console.log(
      `Loaded ${img.src} - ${img.naturalWidth}x${img.naturalHeight}`
    );
  });
});

/*let currentScroll = window.scrollY;
let targetScroll = window.scrollY;
let rafId = null;
let isAnimating = false;

//const ease = 0.05; // floaty
//const ease = 0.08; // natural ✅
//const ease = 0.12; // faster
const ease = 0.9; // faster

// Smooth mouse wheel scrolling
window.addEventListener("wheel", (e) => {
  targetScroll += e.deltaY;

  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

  if (!rafId) smoothScroll();
});

// Sync only when user scrolls manually (scrollbar, keyboard)
window.addEventListener("scroll", () => {
  if (!isAnimating) {
    currentScroll = window.scrollY;
    targetScroll = window.scrollY;
  }
});

function smoothScroll() {
  isAnimating = true;

  currentScroll += (targetScroll - currentScroll) * ease;
  window.scrollTo(0, currentScroll);

  if (Math.abs(targetScroll - currentScroll) > 0.5) {
    rafId = requestAnimationFrame(smoothScroll);
  } else {
    rafId = null;
    isAnimating = false;
  }
}*/

