import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const dissolveCellSize = 16;
const dissolveColumns = Math.ceil(window.innerWidth / dissolveCellSize);
const dissolveRows = Math.ceil(window.innerHeight / dissolveCellSize);
const dissolveSpreadAbove = 0.25;
const dissolveSpreadBelow = 0.25;
const dissolveScatterIntensity = 0.15;
const dissolveSolidCoreRadius = 0.025;
const dissolveMinScatterAtCenter = 0.3;
const dissolveVisibilityThreshold = 0.65;
const dissolveColor = "#ff6426";
const dissolveCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*+=?!<>{}[]";

const stackedImages = document.querySelectorAll(".spotlight-img");
const totalImages = stackedImages.length;
const totalTransitions = totalImages - 1;
const dissolveGrid = document.querySelector(".dissolve-grid");
dissolveGrid.style.setProperty("--dissolve-color", dissolveColor);

stackedImages.forEach((img, i) => {
  img.style.zIndex = totalImages - i;
});

const dissolveFontSize = Math.round(dissolveCellSize * 0.7);

function getRandomCharacter() {
  return dissolveCharacters[
    Math.floor(Math.random() * dissolveCharacters.length)
  ];
}

const dissolveCells = [];
const dissolveCellElements = [];

for (let row = 0; row < dissolveRows; row++) {
  for (let col = 0; col < dissolveColumns; col++) {
    const cell = document.createElement("div");
    cell.className = "dissolve-cell";
    cell.style.left = `${col * dissolveCellSize}px`;
    cell.style.top = `${row * dissolveCellSize}px`;
    cell.style.width = `${dissolveCellSize}px`;
    cell.style.height = `${dissolveCellSize}px`;
    cell.style.fontSize = `${dissolveFontSize}px`;
    cell.textContent = getRandomCharacter();
    dissolveGrid.appendChild(cell);

    dissolveCellElements.push(cell);
    dissolveCells.push({
      row,
      col,
      normalizedY: (row + 0.5) / dissolveRows,
    });
  }
}

function hashFromPosition(row, col, seed) {
  const raw = Math.sin(row * seed + col * (seed * 2.45)) * 43758.5453;
  return raw - Math.floor(raw);
}

const cellVisibilityRandom = dissolveCells.map((cell) =>
  hashFromPosition(cell.row, cell.col, 127.1),
);

const cellScatterOffset = dissolveCells.map(
  (cell) =>
    (hashFromPosition(cell.row, cell.col, 269.3) - 0.5) *
    dissolveScatterIntensity,
);

let activeTransitionIndex = -1;

function onTransitionChange(newIndex) {
  activeTransitionIndex = newIndex;
}

function updateImageClipPaths(scrollProgress, travelRange) {
  for (let i = 0; i < totalTransitions; i++) {
    const segmentStart = i / totalTransitions;
    const segmentEnd = (i + 1) / totalTransitions;

    let segmentProgress =
      (scrollProgress - segmentStart) / (segmentEnd - segmentStart);
    segmentProgress = gsap.utils.clamp(0, 1, segmentProgress);

    const remappedPosition =
      -dissolveSpreadAbove + segmentProgress * travelRange;
    const clipPercent = gsap.utils.clamp(0, 100, remappedPosition * 100);

    stackedImages[i].style.clipPath =
      `polygon(0% ${clipPercent}%, 100% ${clipPercent}%, 100% 100%, 0% 100%)`;
  }
}

function updateDissolveBand(bandCenterY) {
  for (let i = 0; i < dissolveCells.length; i++) {
    const cell = dissolveCells[i];

    const rawDistance = Math.abs(cell.normalizedY - bandCenterY);

    const scatterStrength = gsap.utils.clamp(
      dissolveMinScatterAtCenter,
      1,
      rawDistance / dissolveSolidCoreRadius,
    );

    const scatteredDistance =
      cell.normalizedY - bandCenterY + cellScatterOffset[i] * scatterStrength;

    const normalizedDistance =
      scatteredDistance >= 0
        ? scatteredDistance / dissolveSpreadBelow
        : Math.abs(scatteredDistance) / dissolveSpreadAbove;

    if (normalizedDistance >= 1) {
      dissolveCellElements[i].style.visibility = "hidden";
      continue;
    }

    const density = (1 - normalizedDistance) * (1 - normalizedDistance);

    const isVisible =
      density > cellVisibilityRandom[i] * dissolveVisibilityThreshold;
    dissolveCellElements[i].style.visibility = isVisible ? "visible" : "hidden";
  }
}

function hideAllDissolveCells() {
  for (let i = 0; i < dissolveCellElements.length; i++) {
    dissolveCellElements[i].style.visibility = "hidden";
  }
}

const totalTravelRange = 1 + dissolveSpreadAbove + dissolveSpreadBelow;

ScrollTrigger.create({
  trigger: ".spotlight",
  start: "top top",
  end: `+=${totalTransitions * window.innerHeight}`,
  pin: true,
  pinSpacing: true,
  scrub: true,
  onUpdate: (self) => {
    const scrollProgress = self.progress;

    const rawPosition = scrollProgress * totalTransitions;
    const currentTransition = Math.min(
      Math.floor(rawPosition),
      totalTransitions - 1,
    );
    const transitionProgress = gsap.utils.clamp(
      0,
      1,
      rawPosition - currentTransition,
    );

    if (currentTransition !== activeTransitionIndex) {
      onTransitionChange(currentTransition);
    }

    const bandCenterY =
      -dissolveSpreadAbove + transitionProgress * totalTravelRange;

    if (transitionProgress <= 0 || transitionProgress >= 1) {
      hideAllDissolveCells();
      updateImageClipPaths(scrollProgress, totalTravelRange);
      return;
    }

    updateImageClipPaths(scrollProgress, totalTravelRange);
    updateDissolveBand(bandCenterY);
  },
});
