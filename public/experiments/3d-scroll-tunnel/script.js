import gsap from "gsap";

const CONFIG = {
  totalImages: 12,
  scrollSpeed: 2,
  layerGap: 2500,
  lerp: 0.07,
};

const contentLayerCount = Math.ceil(CONFIG.totalImages / 4);
const totalLayerCount = Math.max(contentLayerCount, 6);
const tunnelDepth = totalLayerCount * CONFIG.layerGap;
const visibleDepth = 3 * CONFIG.layerGap;
const exitPoint = 1500;
const initialScroll = 750;

const spotlightEl = document.querySelector(".spotlight");

const tunnelEl = document.createElement("div");
tunnelEl.classList.add("tunnel");
spotlightEl.appendChild(tunnelEl);

const layerData = [];

for (let i = 0; i < totalLayerCount; i++) {
  const layerEl = document.createElement("div");
  layerEl.classList.add("layer");

  const imageStartIndex = (i % contentLayerCount) * 4;

  for (let j = 0; j < 4; j++) {
    const imageNumber = imageStartIndex + j + 1;
    if (imageNumber > CONFIG.totalImages) break;

    const angle = (j / 4) * Math.PI * 2 - Math.PI / 2;
    const radiusX = 400;
    const radiusY = 280;
    const itemX = Math.cos(angle) * radiusX - 90;
    const itemY = Math.sin(angle) * radiusY - 110;

    const itemEl = document.createElement("div");
    itemEl.classList.add("item");
    itemEl.style.left = `${itemX}px`;
    itemEl.style.top = `${itemY}px`;

    const imageEl = document.createElement("img");
    imageEl.src = `img${imageNumber}.jpg`;
    imageEl.alt = `Image ${imageNumber}`;
    itemEl.appendChild(imageEl);

    const overlayEl = document.createElement("div");
    overlayEl.classList.add("item-overlay");
    itemEl.appendChild(overlayEl);

    layerEl.appendChild(itemEl);
  }

  tunnelEl.appendChild(layerEl);
  layerData.push({ el: layerEl, baseZ: -i * CONFIG.layerGap });
}

let targetScroll = initialScroll;
let currentScroll = initialScroll;

window.addEventListener("wheel", (e) => {
  targetScroll += e.deltaY * CONFIG.scrollSpeed;
});

function calculateOverlay(z) {
  if (z > exitPoint) return 1;
  if (z > 0) return z / exitPoint;
  if (z > -visibleDepth) {
    const progress = Math.abs(z) / visibleDepth;
    return progress * progress;
  }
  return 1;
}

gsap.ticker.add(() => {
  currentScroll += (targetScroll - currentScroll) * CONFIG.lerp;

  layerData.forEach((layer) => {
    let z = layer.baseZ + currentScroll;
    z = ((z % tunnelDepth) + tunnelDepth) % tunnelDepth;
    z = z - tunnelDepth + exitPoint;

    const overlay = calculateOverlay(z);

    gsap.set(layer.el, {
      z: z,
      "--overlay": Math.min(1, Math.max(0, overlay)),
      visibility: overlay >= 1 ? "hidden" : "visible",
    });
  });
});
