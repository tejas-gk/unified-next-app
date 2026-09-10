const settings = {
  scrollSensitivity: 1200,
  smoothness: 0.05,
  bufferSlides: 3,
  imageShift: 25,
  copyShift: 15,
  titleHold: 0.1,
  imageZoom: 1.25,
  revealOverlap: 0.5,
};

const slides = [
  {
    title: "Studioform",
    tags: ["Studio & Movement", "Fitness & Method", "Space & Design"],
    accent: "#a9d0f5",
    link: "/experiments/glitchandgrit-infinite-slider/studioform/",
  },
  {
    title: "Nightbloom",
    tags: ["Editorial & Portrait", "Concept & Series", "Art & Direction"],
    accent: "#f5a97a",
    link: "/experiments/glitchandgrit-infinite-slider/nightbloom/",
  },
  {
    title: "Stillpose",
    tags: ["Movement & Wellness", "Body & Practice", "Brand & Identity"],
    accent: "#b7e0a0",
    link: "/experiments/glitchandgrit-infinite-slider/stillpose/",
  },
  {
    title: "Matchawork",
    tags: ["Beverage & Craft", "Content & Styling", "Product & Story"],
    accent: "#c9a97a",
    link: "/experiments/glitchandgrit-infinite-slider/matchawork/",
  },
  {
    title: "Blurface",
    tags: ["Fashion & Portrait", "Motion & Study", "Brand & Identity"],
    accent: "#e8e8e8",
    link: "/experiments/glitchandgrit-infinite-slider/blurface/",
  },
];

const columns = {
  left: { el: document.querySelector(".left"), visibleSlides: new Map() },
  right: { el: document.querySelector(".right"), visibleSlides: new Map() },
};

let scrollPosition = 1;
let scrollTarget = 1;
let lastTouchY = 0;

function createSlide(side, index) {
  const slideIndex = ((index % slides.length) + slides.length) % slides.length;
  const data = slides[slideIndex];

  const el = document.createElement("div");
  el.className = "slide";
  el.style.zIndex = index;
  el.innerHTML = `
    <img src="/experiments/glitchandgrit-infinite-slider/assets/slide_img_${side}_${slideIndex + 1}.jpg" alt="" />
    <div class="overlay"></div>
    <div class="copy" style="color:${data.accent}">
      <div class="slide-tags">${data.tags.join("<br />")}</div>
      <div class="slide-title">${data.title}</div>
      <a href="${data.link}" class="slide-link">View Full Project</a>
    </div>
  `;

  columns[side].el.appendChild(el);
  columns[side].visibleSlides.set(index, el);
}

function getRevealShape(side, revealAmount) {
  const d =
    Math.max(0, Math.min(1, revealAmount)) * (100 + settings.revealOverlap);
  return side === "left"
    ? `polygon(0% ${100 - d}%, 100% ${100 - d}%, 100% 100%, 0% 100%)`
    : `polygon(0% 0%, 100% 0%, 100% ${d}%, 0% ${d}%)`;
}

function getTitlePosition(slideProgress) {
  const fromCenter = slideProgress - 1;
  const past = Math.abs(fromCenter) - settings.titleHold;
  if (past <= 0) return 1;
  const t = past / (1 - settings.titleHold);
  return 1 + Math.sign(fromCenter) * t * t * (3 - 2 * t);
}

function updateSlider() {
  const first = Math.floor(scrollPosition) - settings.bufferSlides;
  const last = Math.floor(scrollPosition) + settings.bufferSlides + 1;

  for (const side of ["left", "right"]) {
    const visibleSlides = columns[side].visibleSlides;
    const driftDirection = side === "left" ? 1 : -1;

    for (let i = first; i <= last; i++) {
      if (!visibleSlides.has(i)) createSlide(side, i);
    }

    for (const [index, el] of visibleSlides) {
      if (index < first || index > last) {
        el.remove();
        visibleSlides.delete(index);
        continue;
      }

      const revealAmount = scrollPosition - index;
      const slideProgress = Math.max(0, Math.min(2, revealAmount));

      el.style.clipPath = getRevealShape(side, revealAmount);

      const imageDrift =
        (1 - slideProgress) * settings.imageShift * driftDirection;
      el.querySelector("img").style.transform =
        `translateY(${imageDrift}%) scale(${settings.imageZoom})`;

      const titleDrift =
        (1 - getTitlePosition(slideProgress)) *
        settings.copyShift *
        driftDirection;
      el.querySelector(".copy").style.transform = `translateY(${titleDrift}%)`;
    }
  }
}

window.addEventListener("wheel", (e) => {
  scrollTarget += e.deltaY / settings.scrollSensitivity;
});

window.addEventListener(
  "touchstart",
  (e) => (lastTouchY = e.touches[0].clientY),
);

window.addEventListener("touchmove", (e) => {
  scrollTarget +=
    ((lastTouchY - e.touches[0].clientY) * 8) / settings.scrollSensitivity;
  lastTouchY = e.touches[0].clientY;
});

function animateSlider() {
  scrollPosition += (scrollTarget - scrollPosition) * settings.smoothness;
  updateSlider();
  requestAnimationFrame(animateSlider);
}

animateSlider();
