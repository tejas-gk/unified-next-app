import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const CONFIG = {
  waves: {
    base: { amp: 0.1, freq: 1.0, speed: 1.0, phase: 5.0 },
    flow: { amp: 0.15, freq: 5.0, speed: 5.0, phase: 10.0 },
    detail: { amp: 0.025, freq: 5.0, speed: 1.5, phase: 2.5 },
  },
  clipMax: 20,
  clipPower: 2,
};

const TOTAL_IMAGES = 12;
const IMAGE_BASE_HEIGHT = 375;
const ASPECT_RATIOS = ["3/2", "4/3", "5/4", "7/5"];

const spotlightImagesContainer = document.querySelector(".spotlight-images");

for (let i = 0; i < TOTAL_IMAGES; i++) {
  const imageItem = document.createElement("div");
  imageItem.classList.add("spotlight-image");

  const imageAspectRatio = ASPECT_RATIOS[i % ASPECT_RATIOS.length];
  imageItem.style.aspectRatio = imageAspectRatio;

  const shrinkStartIndex = Math.floor(TOTAL_IMAGES * 0.75);

  const shrinkFactor =
    i >= shrinkStartIndex
      ? (i - shrinkStartIndex + 1) / (TOTAL_IMAGES - shrinkStartIndex)
      : 0;

  const imageHeight = IMAGE_BASE_HEIGHT * (1 - shrinkFactor * 0.5);
  imageItem.style.height = `${Math.round(imageHeight)}px`;

  const img = document.createElement("img");
  img.src = `/experiments/scroll-wave-image-gallery/img${i + 1}.jpg`;

  imageItem.appendChild(img);
  spotlightImagesContainer.appendChild(imageItem);
}

const imageItems = gsap.utils.toArray(".spotlight-image");

function updateImageSizes() {
  const sizeFactor = Math.min(window.innerWidth / 750, 1);

  imageItems.forEach((imageItem, i) => {
    const shrinkStartIndex = Math.floor(TOTAL_IMAGES * 0.75);
    const shrinkFactor =
      i >= shrinkStartIndex
        ? (i - shrinkStartIndex + 1) / (TOTAL_IMAGES - shrinkStartIndex)
        : 0;

    const imageHeight =
      IMAGE_BASE_HEIGHT * sizeFactor * (1 - shrinkFactor * 0.5);
    imageItem.style.height = `${Math.round(imageHeight)}px`;
  });
}

updateImageSizes();

imageItems.forEach((imageItem, index) => {
  const normalizedIndex = index / (TOTAL_IMAGES - 1);

  ScrollTrigger.create({
    trigger: imageItem,
    start: "top bottom",
    end: "bottom top",
    onUpdate: ({ progress }) => {
      const { base, flow, detail } = CONFIG.waves;
      const vw = window.innerWidth;

      const baseWave = Math.sin(
        normalizedIndex * base.freq + (1 - progress) * base.speed + base.phase,
      );

      const flowWave =
        0.5 +
        Math.sin(
          normalizedIndex * flow.freq + flow.phase + progress * flow.speed,
        );

      const detailWave =
        0.5 +
        Math.sin(
          normalizedIndex * detail.freq +
            detail.phase +
            progress * detail.speed,
        );

      const translateX =
        (vw - imageItem.offsetWidth) / 2 -
        vw * 0.1 +
        baseWave * vw * base.amp +
        flowWave * vw * flow.amp +
        detailWave * vw * detail.amp;

      const centerOffset = Math.abs(progress - 0.5) * 2;

      const clipAmount =
        Math.pow(centerOffset, CONFIG.clipPower) * CONFIG.clipMax;

      imageItem.style.translate = `${translateX}px`;
      imageItem.style.clipPath = `inset(0 ${clipAmount}% 0 ${clipAmount}%)`;
    },
  });
});

window.addEventListener("resize", () => {
  updateImageSizes();
  ScrollTrigger.refresh();
});
