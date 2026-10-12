(() => {
  const ready = () => {
    document.querySelectorAll('.bbp-card').forEach((card) => {
      const gif = card.querySelector('.bbp-gif');
      if (gif) {
        const src = gif.getAttribute('src') || '';
        if (src && !src.includes('{{gif}}')) {
          gif.classList.add('has-gif');
          gif.addEventListener('error', () => gif.remove(), { once: true });
        } else gif.remove();
      }
      const seconds = Number.parseFloat(card.dataset.duration);
      if (Number.isFinite(seconds) && seconds > 0) card.style.setProperty('--bbp-duration', `${Math.max(3, seconds)}s`);
      const sparkles = card.querySelector('.bbp-sparkles');
      if (sparkles && !sparkles.children.length) {
        for (let i = 0; i < 12; i += 1) {
          const dot = document.createElement('i');
          dot.className = 'bbp-spark';
          dot.style.left = `${8 + Math.random() * 84}%`;
          dot.style.top = `${8 + Math.random() * 84}%`;
          dot.style.animationDelay = `${Math.random() * 2.5}s`;
          dot.style.animationDuration = `${2 + Math.random() * 2.5}s`;
          sparkles.appendChild(dot);
        }
      }
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, { once: true });
  else ready();
})();
