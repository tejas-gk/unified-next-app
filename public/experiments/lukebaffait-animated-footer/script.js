import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const splitHeadingChars = () => {
  const headings = document.querySelectorAll(".footer-header h1");
  const chars = [];

  headings.forEach((heading) => {
    const split = SplitText.create(heading, {
      type: "chars",
      charsClass: "char",
    });
    chars.push(...split.chars);
  });

  gsap.set(chars, { position: "relative", yPercent: 125 });
  return chars;
};

const splitContentLines = () => {
  const elements = document.querySelectorAll(".footer-links a, .footer-text p");
  const lines = [];

  elements.forEach((element) => {
    const split = SplitText.create(element, {
      type: "lines",
      mask: "lines",
      linesClass: "line",
    });
    lines.push(...split.lines);
  });

  gsap.set(lines, { yPercent: 100 });
  return lines;
};

const headingChars = splitHeadingChars();
const contentLines = splitContentLines();

const ASCII_CHARS = "........:::=+xX#0369";
const FONT_SIZE = 18;
const CELL_SIZE = 20;
const ASCII_COLUMNS = 80;
const DPR = 2;

const CHAR_COLOR = "#803500";
const HOVER_COLOR = "#ff6a00";
const HOVER_CHAR_COLOR = "#0f0f0f";

const HOVER_RADIUS = 8;
const CLUSTER_SIZE = 10;
const HIGHLIGHT_LIFETIME = 300;

const backgroundCharIndex = ASCII_CHARS.lastIndexOf(".");

const sampleImagePixels = (image, gridRows) => {
  const canvas = document.createElement("canvas");
  canvas.width = ASCII_COLUMNS;
  canvas.height = gridRows;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, ASCII_COLUMNS, gridRows);
  return ctx.getImageData(0, 0, ASCII_COLUMNS, gridRows).data;
};

const pixelToCharIndex = (pixels, pixelOffset) => {
  const brightness =
    (pixels[pixelOffset] * 0.299 +
      pixels[pixelOffset + 1] * 0.587 +
      pixels[pixelOffset + 2] * 0.114) /
    255;

  return Math.min(
    ASCII_CHARS.length - 1,
    Math.floor((1 - brightness) * ASCII_CHARS.length),
  );
};

const buildCells = (image) => {
  const rows = Math.round(
    ASCII_COLUMNS / (image.naturalWidth / image.naturalHeight),
  );
  const pixels = sampleImagePixels(image, rows);
  const cells = new Map();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < ASCII_COLUMNS; col++) {
      const charIndex = pixelToCharIndex(
        pixels,
        (row * ASCII_COLUMNS + col) * 4,
      );
      if (charIndex <= backgroundCharIndex) continue;

      cells.set(`${col},${row}`, {
        col,
        row,
        char: ASCII_CHARS[charIndex],
        highlightEndTime: 0,
      });
    }
  }

  return { rows, cells };
};

const setupHand = (image) => {
  const { rows, cells } = buildCells(image);
  const cellList = [...cells.values()];

  const canvas = image.closest(".footer-hand-img").querySelector("canvas");
  canvas.width = ASCII_COLUMNS * CELL_SIZE * DPR;
  canvas.height = rows * CELL_SIZE * DPR;

  const ctx = canvas.getContext("2d");
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.font = `${FONT_SIZE}px monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  const metrics = ctx.measureText("X");
  const glyphHeight =
    metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  const baselineOffset =
    CELL_SIZE / 2 + glyphHeight / 2 - metrics.actualBoundingBoxDescent;

  const canvasWidth = ASCII_COLUMNS * CELL_SIZE;
  const canvasHeight = rows * CELL_SIZE;

  const render = () => {
    const now = Date.now();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (const cell of cellList) {
      const x = cell.col * CELL_SIZE;
      const y = cell.row * CELL_SIZE;
      const isHighlighted = cell.highlightEndTime > now;

      if (isHighlighted) {
        ctx.fillStyle = HOVER_COLOR;
        ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
      }

      ctx.fillStyle = isHighlighted ? HOVER_CHAR_COLOR : CHAR_COLOR;
      ctx.fillText(cell.char, x + CELL_SIZE / 2, y + baselineOffset);
    }

    requestAnimationFrame(render);
  };

  render();

  return { canvas, cells, cellList, rows };
};

const hands = [];
document.querySelectorAll("img.ascii-hand").forEach((image) => {
  const canvas = document.createElement("canvas");
  image.closest(".footer-hand-img").appendChild(canvas);

  const start = () => hands.push(setupHand(image));
  if (image.complete && image.naturalWidth) start();
  else image.addEventListener("load", start);
});

const highlightCluster = (cells, startCell) => {
  const now = Date.now();
  startCell.highlightEndTime = now + HIGHLIGHT_LIFETIME;

  const steps = Math.floor(Math.random() * CLUSTER_SIZE) + 1;
  const litCells = [startCell];
  let current = startCell;

  for (let step = 0; step < steps; step++) {
    const neighbours = [];
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;
        const neighbour = cells.get(`${current.col + dx},${current.row + dy}`);
        if (neighbour && !litCells.includes(neighbour))
          neighbours.push(neighbour);
      }
    }
    if (neighbours.length === 0) break;

    const next = neighbours[Math.floor(Math.random() * neighbours.length)];
    next.highlightEndTime = now + HIGHLIGHT_LIFETIME + step * 10;
    litCells.push(next);
    current = next;
  }
};

const hoverHand = (hand, clientX, clientY) => {
  const rect = hand.canvas.getBoundingClientRect();
  const mouseCol = ((clientX - rect.left) / rect.width) * ASCII_COLUMNS;
  const mouseRow = ((clientY - rect.top) / rect.height) * hand.rows;

  let closest = null;
  let closestDist = Infinity;
  for (const cell of hand.cellList) {
    const dx = mouseCol - cell.col;
    const dy = mouseRow - cell.row;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < closestDist) {
      closestDist = dist;
      closest = cell;
    }
  }

  if (closest && closestDist <= HOVER_RADIUS) {
    highlightCluster(hand.cells, closest);
  }
};

window.addEventListener("mousemove", (event) => {
  hands.forEach((hand) => hoverHand(hand, event.clientX, event.clientY));
});

const PARALLAX_STRENGTH = 20;
const PARALLAX_EASE = 0.05;

const footer = document.querySelector("footer");
const handWrappers = [...document.querySelectorAll(".footer-hand-img")];

const parallaxScale = 1 + (PARALLAX_STRENGTH * 2) / 200;

const pointer = { x: 0, y: 0 };
const drift = { x: 0, y: 0 };

const reveal = { left: -125, right: 125 };

const setPointerTarget = (clientX, clientY) => {
  const rect = footer.getBoundingClientRect();
  pointer.x =
    ((clientX - rect.left) / rect.width - 0.5) * PARALLAX_STRENGTH * 2;
  pointer.y =
    ((clientY - rect.top) / rect.height - 0.5) * PARALLAX_STRENGTH * 2;
};

const renderParallax = () => {
  drift.x += (pointer.x - drift.x) * PARALLAX_EASE;
  drift.y += (pointer.y - drift.y) * PARALLAX_EASE;

  handWrappers.forEach((wrapper, i) => {
    const direction = i === 0 ? 1 : -1;
    const revealX = i === 0 ? reveal.left : reveal.right;
    const x = drift.x * direction;
    const y = -drift.y;
    wrapper.style.transform = `translate(calc(${x}px + ${revealX}%), ${y}px) scale(${parallaxScale})`;
  });

  requestAnimationFrame(renderParallax);
};

renderParallax();

window.addEventListener("mousemove", (event) => {
  setPointerTarget(event.clientX, event.clientY);
});

const charStagger = { each: 0.04, from: "center" };

const animateIn = () => {
  gsap.to(reveal, {
    left: 0,
    right: 0,
    duration: 1,
    ease: "power3.out",
    overwrite: true,
  });
  gsap.to(headingChars, {
    yPercent: 0,
    duration: 1,
    ease: "power3.out",
    stagger: charStagger,
    overwrite: true,
  });
  gsap.to(contentLines, {
    yPercent: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.08,
    overwrite: true,
  });
};

const animateOut = () => {
  gsap.to(reveal, {
    left: -125,
    right: 125,
    duration: 0.4,
    ease: "power2.in",
    overwrite: true,
  });
  gsap.to(headingChars, {
    yPercent: 125,
    duration: 0.4,
    ease: "power2.in",
    stagger: { each: 0.01, from: "center" },
    overwrite: true,
  });
  gsap.to(contentLines, {
    yPercent: 100,
    duration: 0.4,
    ease: "power2.in",
    stagger: 0.02,
    overwrite: true,
  });
};

ScrollTrigger.create({
  trigger: ".footer-revealer",
  start: "top 50%",
  onEnter: animateIn,
});

ScrollTrigger.create({
  trigger: ".footer-revealer",
  start: "top 85%",
  onLeaveBack: animateOut,
});
