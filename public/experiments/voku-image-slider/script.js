import gsap from "gsap";

const SLIDE_WIDTH = 200;
const SLIDE_HEIGHT = 275;
const SLIDE_GAP = 100;
const SLIDE_COUNT = 9;
const ARC_DEPTH = 150;
const CENTER_LIFT = 100;
const SCROLL_LERP = 0.05;

const slideSources = Array.from(
  { length: SLIDE_COUNT },
  (_, i) => `/experiments/voku-image-slider/img${i + 1}.jpg`,
);

const slideTitles = [
  "Profile Study",
  "Pump Noir",
  "Compact Disc",
  "Iris Frame",
  "Open Compact",
  "Shelf Set",
  "Hand Held",
  "Clear Stack",
  "Foam Pump",
];

const sliderContainer = document.querySelector(".slider");
const titleDisplay = document.getElementById("slide-title");

const trackWidth = SLIDE_COUNT * SLIDE_GAP;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let windowCenterX = windowWidth / 2;
let arcBaselineY = windowHeight * 0.4;

slideSources.forEach((src) => {
  const slideEl = document.createElement("div");
  slideEl.classList.add("slide");

  const imgEl = document.createElement("img");
  imgEl.src = src;
  slideEl.appendChild(imgEl);

  sliderContainer.appendChild(slideEl);
});

const slideElements = gsap.utils.toArray(".slide");

function computeSlideTransform(slideIndex, scrollOffset) {
  let wrappedOffsetX =
    (((slideIndex * SLIDE_GAP - scrollOffset) % trackWidth) + trackWidth) %
    trackWidth;
  if (wrappedOffsetX > trackWidth / 2) wrappedOffsetX -= trackWidth;

  const slideCenterX = windowCenterX + wrappedOffsetX;
  const normalizedDist = (slideCenterX - windowCenterX) / (windowWidth * 0.5);
  const absDist = Math.min(Math.abs(normalizedDist), 1.3);

  const scaleFactor = Math.max(1 - absDist * 0.8, 0.25);
  const scaledWidth = SLIDE_WIDTH * scaleFactor;
  const scaledHeight = SLIDE_HEIGHT * scaleFactor;

  const clampedDist = Math.min(absDist, 1);
  const arcDropY = (1 - Math.cos(clampedDist * Math.PI)) * 0.5 * ARC_DEPTH;

  const centerLiftY = Math.max(1 - absDist * 2, 0) * CENTER_LIFT;

  return {
    x: slideCenterX - scaledWidth / 2,
    y: arcBaselineY - scaledHeight / 2 + arcDropY - centerLiftY,
    width: scaledWidth,
    height: scaledHeight,
    zIndex: Math.round((1 - absDist) * 100),
    distanceFromCenter: Math.abs(wrappedOffsetX),
  };
}

function layoutSlides(scrollOffset) {
  slideElements.forEach((slideEl, i) => {
    const { x, y, width, height, zIndex } = computeSlideTransform(
      i,
      scrollOffset,
    );
    gsap.set(slideEl, { x, y, width, height, zIndex });
  });
}

layoutSlides(0);

let scrollTarget = 0;
let scrollCurrent = 0;

sliderContainer.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    scrollTarget += e.deltaY * 0.5;
  },
  { passive: false },
);

let touchStartX = 0;

sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    const touchCurrentX = e.touches[0].clientX;
    scrollTarget += (touchStartX - touchCurrentX) * 1.2;
    touchStartX = touchCurrentX;
  },
  { passive: false },
);

let activeSlideIndex = -1;

function syncActiveTitle(scrollOffset) {
  let closestIndex = 0;
  let closestDist = Infinity;

  slideElements.forEach((_, i) => {
    const { distanceFromCenter } = computeSlideTransform(i, scrollOffset);
    if (distanceFromCenter < closestDist) {
      closestDist = distanceFromCenter;
      closestIndex = i;
    }
  });

  if (closestIndex !== activeSlideIndex) {
    activeSlideIndex = closestIndex;
    titleDisplay.textContent = slideTitles[closestIndex];
  }
}

function animate() {
  scrollCurrent += (scrollTarget - scrollCurrent) * SCROLL_LERP;

  layoutSlides(scrollCurrent);
  syncActiveTitle(scrollCurrent);

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  windowCenterX = windowWidth / 2;
  arcBaselineY = windowHeight * 0.4;
});
