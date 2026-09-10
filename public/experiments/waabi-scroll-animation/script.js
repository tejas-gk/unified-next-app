import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const heroCopySplit = SplitText.create(".hero-copy h3", {
    type: "words",
    wordsClass: "word",
  });

  let isHeroCopyHidden = false;

  ScrollTrigger.create({
    trigger: ".hero",
    start: "top top",
    end: `+${window.innerHeight * 3.5}px`,
    pin: true,
    pinSpacing: false,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      const heroHeaderProgress = Math.min(progress / 0.29, 1);
      gsap.set(".hero-header", { yPercent: -heroHeaderProgress * 100 });

      const heroWordsProgress = Math.max(
        0,
        Math.min((progress - 0.29) / 0.21, 1),
      );
      const totalWords = heroCopySplit.words.length;
      heroCopySplit.words.forEach((word, i) => {
        const wordStart = i / totalWords;
        const wordEnd = (i + 1) / totalWords;
        const wordOpacity = Math.max(
          0,
          Math.min((heroWordsProgress - wordStart) / (wordEnd - wordStart), 1),
        );
        gsap.set(word, { opacity: wordOpacity });
      });

      if (progress > 0.64 && !isHeroCopyHidden) {
        isHeroCopyHidden = true;
        gsap.to(".hero-copy h3", { opacity: 0, duration: 0.2 });
      } else if (progress <= 0.64 && isHeroCopyHidden) {
        isHeroCopyHidden = false;
        gsap.to(".hero-copy h3", { opacity: 1, duration: 0.2 });
      }

      const heroImgProgress = Math.max(
        0,
        Math.min((progress - 0.71) / 0.29, 1),
      );
      const heroImgWidth = gsap.utils.interpolate(
        window.innerWidth,
        150,
        heroImgProgress,
      );
      const heroImgHeight = gsap.utils.interpolate(
        window.innerHeight,
        150,
        heroImgProgress,
      );
      const heroImgBorderRadius = gsap.utils.interpolate(
        0,
        10,
        heroImgProgress,
      );
      gsap.set(".hero-img", {
        width: heroImgWidth,
        height: heroImgHeight,
        borderRadius: heroImgBorderRadius,
      });
    },
  });

  const aboutImgCols = [
    { id: "#about-imgs-col-1", y: -500 },
    { id: "#about-imgs-col-2", y: -250 },
    { id: "#about-imgs-col-3", y: -250 },
    { id: "#about-imgs-col-4", y: -500 },
  ];

  aboutImgCols.forEach(({ id, y }) => {
    gsap.to(id, {
      y,
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
});
