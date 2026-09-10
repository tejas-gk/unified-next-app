gsap.registerPlugin(SplitText, CustomEase);
CustomEase.create("hop", "0.8, 0, 0.1, 1");

const ROTATING_WORDS = ["Studios", "Season", "Chamber", "Archive", "Vision"];

const preloader = document.querySelector(".preloader");
const preloaderCounter = document.querySelector(".preloader-counter h1");
const preloaderWord = document.querySelector(
  ".preloader-header-row:nth-child(2) h1",
);

const heroRows = gsap.utils.toArray(".hero-header-row");
const heroHeadings = gsap.utils.toArray(".hero-header-row h1");
const heroImageFrame = document.querySelector(".hero-header-img");
const heroImages = gsap.utils.toArray(".hero-header-img img");

const counter = { progress: 0 };
const wordCycle = { progress: 0 };
const imageCycle = { progress: 0 };

let activeWord = 0;
let activeImage = 0;

const headingSplits = heroHeadings.map((heading) =>
  SplitText.create(heading, {
    type: "words",
    mask: "words",
    wordsClass: "word",
  }),
);

headingSplits.forEach((split, rowIndex) => {
  gsap.set(split.words, { x: rowIndex === 1 ? "100%" : "-100%" });
});

gsap.set("nav", { y: -300 });

const rootFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize,
);
const leftEdgeOffset =
  2.5 * rootFontSize - heroImageFrame.getBoundingClientRect().left;

gsap.set(heroImageFrame, { x: leftEdgeOffset });

function renderCounter() {
  const value = Math.round(counter.progress);
  preloaderCounter.textContent = String(value).padStart(3, "0");
}

function renderWord() {
  const index = Math.round(wordCycle.progress);
  if (index === activeWord) return;

  activeWord = index;
  preloaderWord.innerText = ROTATING_WORDS[index];
}

function renderImage() {
  const index = Math.round(imageCycle.progress) % heroImages.length;
  if (index === activeImage) return;

  activeImage = index;
  heroImages.forEach((image, imageIndex) => {
    image.style.opacity = imageIndex === index ? 1 : 0;
  });
}

function expandImageToFullscreen() {
  heroRows.forEach((row) => {
    gsap.set(row, {
      flex: "none",
      height: row.getBoundingClientRect().height,
    });
  });

  const frame = heroImageFrame.getBoundingClientRect();

  gsap.set(heroImageFrame, {
    position: "fixed",
    top: frame.top,
    left: frame.left,
    width: frame.width,
    height: frame.height,
    x: 0,
    y: 0,
    zIndex: -1,
  });

  gsap.to(heroImageFrame, {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    duration: 1.25,
    ease: "hop",
  });
}

const tl = gsap.timeline({ delay: 0.5 });

tl.to(counter, {
  progress: 100,
  duration: 3,
  ease: "none",
  onUpdate: renderCounter,
});

tl.to(
  heroImageFrame,
  {
    x: 0,
    duration: 3,
    ease: "none",
  },
  0,
);

tl.to(
  wordCycle,
  {
    progress: ROTATING_WORDS.length - 1,
    duration: 3,
    ease: "none",
    onUpdate: renderWord,
  },
  0,
);

tl.to(
  imageCycle,
  {
    progress: heroImages.length * 3 - 1,
    duration: 3,
    ease: "none",
    onUpdate: renderImage,
  },
  0,
);

tl.to(
  [".preloader-header", ".preloader-counter", ".preloader-footer-copy"],
  {
    opacity: 0,
    duration: 0.25,
  },
  "+=0.35",
);

tl.to(preloader, {
  clipPath: "polygon(0% 0%, 100% 0, 100% 0%, 0% 0%)",
  duration: 1,
  ease: "hop",
  onComplete: () => preloader.remove(),
});

tl.to(
  ".word",
  {
    x: "0%",
    duration: 1.25,
    ease: "power3.out",
    onComplete: expandImageToFullscreen,
  },
  "-=0.5",
);

tl.to(
  ".hero-footer p",
  {
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  },
  "<",
);

tl.to(
  "nav",
  {
    y: 0,
    duration: 1,
    ease: "power3.out",
  },
  "<",
);
