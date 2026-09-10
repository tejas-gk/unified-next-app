import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const outroHeaderSplit = SplitText.create(".hero-outro-header h3", {
  type: "lines",
  mask: "lines",
  linesClass: "line",
});
gsap.set(outroHeaderSplit.lines, { y: "100%" });

const fgContent = document.querySelector(".hero-fg-content");
const fgOverlayDark = document.querySelector(".hero-fg-overlay-dark");
const fgOverlayAccent = document.querySelector(".hero-fg-overlay");
const bgCopyLeft = document.querySelectorAll(".hero-bg-content-copy")[0];
const bgCopyRight = document.querySelectorAll(".hero-bg-content-copy")[1];
const outroImgTop = document.querySelectorAll(".hero-outro-img")[0];
const outroImgBottom = document.querySelectorAll(".hero-outro-img")[1];

let areOutroLinesRevealed = false;

ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: `+=${window.innerHeight * 5}px`,
  pin: true,
  pinSpacing: true,
  scrub: 1,
  onUpdate: (self) => {
    const scrollProgress = self.progress;

    const phase1Progress = gsap.utils.clamp(0, 1, scrollProgress / 0.25);
    const slitLeftEdge = gsap.utils.interpolate(0, 48, phase1Progress);
    const slitRightEdge = gsap.utils.interpolate(100, 52, phase1Progress);

    gsap.set(fgContent, {
      clipPath: `polygon(${slitLeftEdge}% 0%, ${slitRightEdge}% 0%, ${slitRightEdge}% 100%, ${slitLeftEdge}% 100%)`,
    });

    const darkOverlayOpacity = gsap.utils.interpolate(0, 1, phase1Progress);
    gsap.set(fgOverlayDark, { opacity: darkOverlayOpacity });

    const phase2Progress = gsap.utils.clamp(
      0,
      1,
      (scrollProgress - 0.25) / 0.2,
    );
    const fgRotation = gsap.utils.interpolate(0, 65, phase2Progress);
    gsap.set(fgContent, { rotate: fgRotation });

    const phase3Progress = gsap.utils.clamp(
      0,
      1,
      (scrollProgress - 0.45) / 0.2,
    );
    const fgScale = gsap.utils.interpolate(1, 0, phase3Progress);
    gsap.set(fgContent, { scale: fgScale });

    const bgCopyLeftX = gsap.utils.interpolate(0, 100, phase3Progress);
    const bgCopyRightX = gsap.utils.interpolate(0, -100, phase3Progress);
    gsap.set(bgCopyLeft, { x: `${bgCopyLeftX}%` });
    gsap.set(bgCopyRight, { x: `${bgCopyRightX}%` });

    const phase3OverlayProgress = gsap.utils.clamp(
      0,
      1,
      (scrollProgress - 0.45) / 0.05,
    );
    const redOverlayOpacity = gsap.utils.interpolate(
      0,
      1,
      phase3OverlayProgress,
    );
    gsap.set(fgOverlayAccent, { opacity: redOverlayOpacity });

    const phase4Progress = gsap.utils.clamp(
      0,
      1,
      (scrollProgress - 0.65) / 0.2,
    );

    const topImgBottomEdge = gsap.utils.interpolate(0, 100, phase4Progress);
    gsap.set(outroImgTop, {
      clipPath: `polygon(0% 0%, 100% 0%, 100% ${topImgBottomEdge}%, 0% ${topImgBottomEdge}%)`,
    });

    const bottomImgTopEdge = gsap.utils.interpolate(100, 0, phase4Progress);
    gsap.set(outroImgBottom, {
      clipPath: `polygon(0% ${bottomImgTopEdge}%, 100% ${bottomImgTopEdge}%, 100% 100%, 0% 100%)`,
    });

    if (scrollProgress >= 0.9 && !areOutroLinesRevealed) {
      areOutroLinesRevealed = true;
      gsap.to(outroHeaderSplit.lines, {
        y: "0%",
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });
    } else if (scrollProgress < 0.9 && areOutroLinesRevealed) {
      areOutroLinesRevealed = false;
      gsap.to(outroHeaderSplit.lines, {
        y: "100%",
        duration: 0.25,
        stagger: -0.05,
        ease: "power3.out",
      });
    }
  },
});
