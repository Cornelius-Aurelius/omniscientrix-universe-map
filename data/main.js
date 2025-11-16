/* -------------------------------------------
   Omniscientrix vΩ Engine — Pure GitHub Edition
   Cosmic Starfield Renderer (No Libraries)
-------------------------------------------- */

// Canvas setup
const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Star generation
const STAR_COUNT = 600;
const stars = [];

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width
  });
}

// Rendering logic
function draw() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = stars[i];

    star.z -= 1;
    if (star.z <= 0) star.z = canvas.width;

    const k = 128 / star.z;
    const x = star.x * k + canvas.width / 2;
    const y = star.y * k + canvas.height / 2;

    if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;

    const size = (1 - star.z / canvas.width) * 2;
    ctx.fillStyle = "#00A7FF";
    ctx.fillRect(x, y, size, size);
  }

  requestAnimationFrame(draw);
}

draw();
