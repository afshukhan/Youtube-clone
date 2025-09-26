// script.js — replace entire file with this (no <script> tags)
document.addEventListener('DOMContentLoaded', () => {

  // --- Show more only (no Show fewer) ---
  const showMoreBtn = document.getElementById('showMore');
  const moreSubs    = document.getElementById('moreSubs');

  if (showMoreBtn && moreSubs) {
    showMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // Show the hidden list
      moreSubs.classList.remove('hidden');

      // Hide the "Show more" button so it doesn't toggle back
      showMoreBtn.style.display = 'none';
    });
  }

  // --- Video thumbnails to player ---
  const thumbs = document.querySelectorAll('.video-thumb');
  const player = document.getElementById('player');
  const playerVideo = document.getElementById('playerVideo');

  if (player && playerVideo && thumbs.length) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const src = thumb.dataset.src;
        if (!src) return;
        playerVideo.src = src;
        player.classList.add('active');
        // Autoplay might be blocked by some browsers; ignore errors
        playerVideo.play().catch(() => {});
      });
    });
  }

});
