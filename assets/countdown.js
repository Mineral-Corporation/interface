document.addEventListener("DOMContentLoaded", () => {
    const target = new Date("2025-08-07T00:00:00Z").getTime();
    const el = document.getElementById("countdown");

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        el.textContent = "Countdown complete.";
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      el.textContent = `${d}d ${h}h ${m}m ${s}s remaining.`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
