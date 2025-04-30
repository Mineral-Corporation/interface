document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typewrite");
  const lines = JSON.parse(el.getAttribute("data-lines"));
  let i = 0;

  function typeLine(line, cb) {
    let j = 0;
    const span = document.createElement("div");
    el.appendChild(span);

    const interval = setInterval(() => {
      if (j < line.length) {
        span.textContent += line[j++];
      } else {
        clearInterval(interval);
        cb();
      }
    }, 40);
  }

  function typeNext() {
    if (i < lines.length) {
      typeLine(lines[i++], typeNext);
    }
  }

  typeNext();
});
