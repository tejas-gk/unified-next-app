import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const container = document.querySelector(".container");
  const navToggle = document.querySelector(".nav-toggle");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuContent = document.querySelector(".menu-content");
  const menuImage = document.querySelector(".menu-img");
  const menuLinksWrapper = document.querySelector(".menu-links-wrapper");
  const linkHighlighter = document.querySelector(".link-highlighter");

  let currentX = 0;
  let targetX = 0;
  const lerpFactor = 0.05;

  let currentHighlighterX = 0;
  let targetHighlighterX = 0;
  let currentHighlighterWidth = 0;
  let targetHighlighterWidth = 0;

  let isMenuOpen = false;
  let isMenuAnimating = false;

  const menuLinks = document.querySelectorAll(".menu-link a");
  menuLinks.forEach((link) => {
    const chars = link.querySelectorAll("span");
    chars.forEach((char, charIndex) => {
      const split = new SplitText(char, { type: "chars" });
      split.chars.forEach((char) => {
        char.classList.add("char");
      });
      if (charIndex === 1) {
        gsap.set(split.chars, { y: "110%" });
      }
    });
  });

  gsap.set(menuContent, { y: "50%", opacity: 0.25 });
  gsap.set(menuImage, { scale: 0.5, opacity: 0.25 });
  gsap.set(menuLinks, { y: "150%" });
  gsap.set(linkHighlighter, { y: "150%" });

  const defaultLinkText = document.querySelector(
    ".menu-link:first-child a span"
  );
  if (defaultLinkText) {
    const linkWidth = defaultLinkText.offsetWidth;
    linkHighlighter.style.width = linkWidth + "px";
    currentHighlighterWidth = linkWidth;
    targetHighlighterWidth = linkWidth;

    const defaultLinkTextElement = document.querySelector(
      ".menu-link:first-child"
    );
    const linkRect = defaultLinkTextElement.getBoundingClientRect();
    const menuWrapperRect = menuLinksWrapper.getBoundingClientRect();
    const initialX = linkRect.left - menuWrapperRect.left;
    currentHighlighterX = initialX;
    targetHighlighterX = initialX;
  }

  function toggleMenu() {
    if (isMenuAnimating) return;
    isMenuAnimating = true;

    if (!isMenuOpen) {
      gsap.to(container, {
        y: "-40%",
        opacity: 0.25,
        duration: 1.25,
        ease: "expo.out",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1.25,
        ease: "expo.out",
        onComplete: () => {
          gsap.set(container, { y: "40%" });
          gsap.set(".menu-link", { overflow: "visible" });

          isMenuOpen = true;
          isMenuAnimating = false;
        },
      });

      gsap.to(menuContent, {
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
      });

      gsap.to(menuImage, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
      });

      gsap.to(menuLinks, {
        y: "0%",
        duration: 1.25,
        stagger: 0.1,
        delay: 0.25,
        ease: "expo.out",
      });

      gsap.to(linkHighlighter, {
        y: "0%",
        duration: 1,
        delay: 1,
        ease: "expo.out",
      });
    } else {
      gsap.to(container, {
        y: "0%",
        opacity: 1,
        duration: 1.25,
        ease: "expo.out",
      });

      gsap.to(menuLinks, {
        y: "-200%",
        duration: 1.25,
        ease: "expo.out",
      });

      gsap.to(menuContent, {
        y: "-100%",
        opacity: 0.25,
        duration: 1.25,
        ease: "expo.out",
      });

      gsap.to(menuImage, {
        y: "-100%",
        opacity: 0.5,
        duration: 1.25,
        ease: "expo.out",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.25,
        ease: "expo.out",
        onComplete: () => {
          gsap.set(menuOverlay, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });
          gsap.set(menuLinks, { y: "150%" });
          gsap.set(linkHighlighter, { y: "150%" });
          gsap.set(menuContent, { y: "50%", opacity: 0.25 });
          gsap.set(menuImage, { y: "0%", scale: 0.5, opacity: 0.25 });
          gsap.set(".menu-link", { overflow: "hidden" });

          gsap.set(menuLinksWrapper, { x: 0 });
          currentX = 0;
          targetX = 0;

          isMenuOpen = false;
          isMenuAnimating = false;
        },
      });
    }
  }

  navToggle.addEventListener("click", toggleMenu);

  const menuLinkContainers = document.querySelectorAll(".menu-link");
  menuLinkContainers.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (window.innerWidth < 1000) return;

      const linkCopy = link.querySelectorAll("a span");
      const visibleCopy = linkCopy[0];
      const animatedCopy = linkCopy[1];

      const visibleChars = visibleCopy.querySelectorAll(".char");
      gsap.to(visibleChars, {
        y: "-110%",
        stagger: 0.03,
        duration: 0.5,
        ease: "expo.inOut",
      });

      const animatedChars = animatedCopy.querySelectorAll(".char");
      gsap.to(animatedChars, {
        y: "0%",
        stagger: 0.03,
        duration: 0.5,
        ease: "expo.inOut",
      });
    });

    link.addEventListener("mouseleave", () => {
      if (window.innerWidth < 1000) return;

      const linkCopy = link.querySelectorAll("a span");
      const visibleCopy = linkCopy[0];
      const animatedCopy = linkCopy[1];

      const animatedChars = animatedCopy.querySelectorAll(".char");
      gsap.to(animatedChars, {
        y: "110%",
        stagger: 0.03,
        duration: 0.5,
        ease: "expo.inOut",
      });

      const visibleChars = visibleCopy.querySelectorAll(".char");
      gsap.to(visibleChars, {
        y: "0%",
        stagger: 0.03,
        duration: 0.5,
        ease: "expo.inOut",
      });
    });
  });

  menuOverlay.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 1000) return;

    const mouseX = e.clientX;
    const viewportWidth = window.innerWidth;
    const menuLinksWrapperWidth = menuLinksWrapper.offsetWidth;

    const maxMoveLeft = 0;
    const maxMoveRight = viewportWidth - menuLinksWrapperWidth;

    const sensitivityRange = viewportWidth * 0.5;
    const startX = (viewportWidth - sensitivityRange) / 2;
    const endX = startX + sensitivityRange;

    let mousePercentage;
    if (mouseX <= startX) {
      mousePercentage = 0;
    } else if (mouseX >= endX) {
      mousePercentage = 1;
    } else {
      mousePercentage = (mouseX - startX) / sensitivityRange;
    }

    targetX = maxMoveLeft + mousePercentage * (maxMoveRight - maxMoveLeft);
  });

  menuLinkContainers.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (window.innerWidth < 1000) return;

      const linkRect = link.getBoundingClientRect();
      const menuWrapperRect = menuLinksWrapper.getBoundingClientRect();

      targetHighlighterX = linkRect.left - menuWrapperRect.left;

      const linkCopyElement = link.querySelector("a span");
      targetHighlighterWidth = linkCopyElement
        ? linkCopyElement.offsetWidth
        : link.offsetWidth;
    });
  });

  menuLinksWrapper.addEventListener("mouseleave", () => {
    const defaultLinkText = document.querySelector(".menu-link:first-child");
    const defaultLinkTextSpan = defaultLinkText.querySelector("a span");

    const linkRect = defaultLinkText.getBoundingClientRect();
    const menuWrapperRect = menuLinksWrapper.getBoundingClientRect();

    targetHighlighterX = linkRect.left - menuWrapperRect.left;
    targetHighlighterWidth = defaultLinkTextSpan.offsetWidth;
  });

  function animate() {
    currentX += (targetX - currentX) * lerpFactor;
    currentHighlighterX +=
      (targetHighlighterX - currentHighlighterX) * lerpFactor;
    currentHighlighterWidth +=
      (targetHighlighterWidth - currentHighlighterWidth) * lerpFactor;

    gsap.to(menuLinksWrapper, {
      x: currentX,
      duration: 0.3,
      ease: "power4.out",
    });

    gsap.to(linkHighlighter, {
      x: currentHighlighterX,
      width: currentHighlighterWidth,
      duration: 0.3,
      ease: "power4.out",
    });

    requestAnimationFrame(animate);
  }

  animate();
});
