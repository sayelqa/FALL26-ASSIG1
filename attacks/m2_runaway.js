// =====================================================================
// MISSION 2 ATTACK: The Runaway Button
// =====================================================================
// Write your attack here, then COPY the whole file and PASTE it into the
// DevTools Console of http://localhost:3000.
//
// Everything is wrapped in (() => { ... })(); on purpose. It is an
// immediately invoked function: it lets you paste the script again after
// a page reload without "Identifier has already been declared" errors.
//
// Author:
// =====================================================================

(() => {
  const zone = document.getElementById("danger-zone");
  const original = document.getElementById("purge-btn");

  const btn = original.cloneNode(true);
original.replaceWith(btn);

btn.tabIndex = -1;

zone.style.position = "relative";
btn.style.position = "absolute";

let oldX = -1000;
let oldY = -1000;

let dodges = 0;
const counter = document.createElement("p");
counter.textContent = "Dodges: 0";
zone.insertAdjacentElement("afterend", counter);

btn.addEventListener("pointerenter", () => {
  let maxX = zone.clientWidth - btn.offsetWidth;
  let maxY = zone.clientHeight - btn.offsetHeight;

  let x;
  let y;

  do {
    x = Math.floor(Math.random() * maxX);
    y = Math.floor(Math.random() * maxY);
  } while (
    Math.abs(x - oldX) < btn.offsetWidth &&
    Math.abs(y - oldY) < btn.offsetHeight
  );

  btn.style.left = x + "px";
  btn.style.top = y + "px";

  oldX = x;
  oldY = y;

  dodges++;
  counter.textContent = "Dodges: " + dodges;

  const colors = ["blue", "green", "purple", "orange", "red"];
  let randomColor = Math.floor(Math.random() * colors.length);
  btn.style.backgroundColor = colors[randomColor];
});
  console.log("[attack] runaway button installed");
})();
