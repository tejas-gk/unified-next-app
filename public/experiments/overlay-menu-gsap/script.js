import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const navToggler = document.querySelector(".nav-toggler");
const navBgs = document.querySelectorAll(".nav-bg");

let isMenuOpen = false;
let isAnimating = false;

const tl = gsap.timeline({
  paused: true,
  onComplete: () => {
    isAnimating = false;
  },
  onReverseComplete: () => {
    gsap.set(linkBlocks.join(", "), { y: "100%" });
    isAnimating = false;
  },
});

navToggler.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  navToggler.classList.toggle("open");

  if (!isMenuOpen) {
    tl.play();
    animateLinksIn();
  } else {
    tl.reverse();
  }

  isMenuOpen = !isMenuOpen;
});

tl.to(navBgs, {
  scaleY: 1,
  duration: 0.75,
  stagger: 0.1,
  ease: "power3.inOut",
});

tl.to(
  ".nav-items",
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.75,
    ease: "power3.inOut",
  },
  "-=0.6",
);

const splitLinks = SplitText.create(".nav-items a", {
  type: "lines",
  mask: "lines",
  linesClass: "line",
});

const linkBlocks = [
  ".nav-socials .line, .nav-legal .line",
  ".nav-primary-links .line",
  ".nav-secondary-links .line",
];

function animateLinksIn() {
  linkBlocks.forEach((selector) => {
    gsap.fromTo(
      selector,
      { y: "100%" },
      {
        y: "0%",
        duration: 0.75,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.85,
      },
    );
  });
}
