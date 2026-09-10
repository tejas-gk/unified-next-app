const config = {
  totalSlides: 10,
  lerp: 0.075,
  scrollSpeed: 3.5,
  minSize: 0.1,
  growth: 0.25,
  aspect: 1 / 1.25,
  baseline: 0.0,
};

const slider = document.querySelector(".slider");

const growthRatio = Math.exp(config.growth);

const slideCount =
  Math.ceil(Math.log(1 + (growthRatio - 1) / config.minSize) / config.growth) +
  4;

const lerp = (start, end, t) => start + (end - start) * t;
const wrap = (value, max) => ((value % max) + max) % max;
const edgeX = (position, width) =>
  (width * config.minSize * (Math.pow(growthRatio, position) - 1)) /
  (growthRatio - 1);

const slides = [];
const slideStreamIndex = [];

for (let i = 0; i < slideCount; i++) {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.appendChild(document.createElement("img"));
  slider.appendChild(slide);

  slides.push(slide);
  slideStreamIndex.push(i);
}

function setSlideImage(slide, imageNumber) {
  if (slide.dataset.image === String(imageNumber)) return;
  slide.dataset.image = imageNumber;
  slide.querySelector("img").src = `slide-img-${imageNumber}.jpg`;
}

let scroll = 0;
let scrollTarget = 0;

slider.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    scrollTarget += (e.deltaY + e.deltaX) * config.scrollSpeed * 0.0014;
  },
  { passive: false },
);

let lastTouchX = null;

slider.addEventListener("touchstart", (e) => {
  lastTouchX = e.touches[0].clientX;
});

slider.addEventListener(
  "touchmove",
  (e) => {
    if (lastTouchX === null) return;
    const x = e.touches[0].clientX;
    scrollTarget += (lastTouchX - x) * config.scrollSpeed * 0.004;
    lastTouchX = x;
  },
  { passive: true },
);

slider.addEventListener("touchend", () => {
  lastTouchX = null;
});

let lastPointerX = null;

slider.addEventListener("pointerdown", (e) => {
  lastPointerX = e.clientX;
  slider.setPointerCapture(e.pointerId);
});

slider.addEventListener("pointermove", (e) => {
  if (lastPointerX === null) return;
  scrollTarget += (lastPointerX - e.clientX) * config.scrollSpeed * -0.005;
  lastPointerX = e.clientX;
});

const releasePointer = () => {
  lastPointerX = null;
};

slider.addEventListener("pointerup", releasePointer);
slider.addEventListener("pointercancel", releasePointer);

function render() {
  scroll += (scrollTarget - scroll) * config.lerp;

  const sliderWidth = slider.clientWidth;
  const sliderHeight = slider.clientHeight;
  const baselineOffset = sliderHeight * config.baseline;

  for (let i = 0; i < slideCount; i++) {
    const slide = slides[i];
    let streamIndex = slideStreamIndex[i];

    while (edgeX(streamIndex + scroll, sliderWidth) > sliderWidth)
      streamIndex -= slideCount;
    while (edgeX(streamIndex + scroll + 1, sliderWidth) < 0)
      streamIndex += slideCount;
    slideStreamIndex[i] = streamIndex;

    const left = Math.round(edgeX(streamIndex + scroll, sliderWidth));
    const right = Math.round(edgeX(streamIndex + scroll + 1, sliderWidth));
    const width = right - left;
    const height = width / config.aspect;

    setSlideImage(slide, wrap(streamIndex, config.totalSlides) + 1);

    slide.style.width = `${width}px`;
    slide.style.height = `${height}px`;
    slide.style.zIndex = Math.round(right);
    slide.style.transform = `translate(${left}px, ${-baselineOffset}px)`;
  }

  requestAnimationFrame(render);
}

render();
