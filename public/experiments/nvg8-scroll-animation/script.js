import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll(".svg-row svg path").forEach((originalPath) => {
    const borderPath = originalPath.cloneNode(true);
    const originalWidth = parseInt(originalPath.getAttribute("stroke-width"));
    borderPath.setAttribute("stroke", "#0f0f0f");
    borderPath.setAttribute("stroke-width", originalWidth + 10);
    borderPath.classList.add("border-path");
    originalPath.parentElement.insertBefore(borderPath, originalPath);
  });

  document.querySelectorAll(".svg-container-2 svg").forEach((svg) => {
    const viewBox = svg.getAttribute("viewBox");
    if (!viewBox) return;
    const [x, y, width, height] = viewBox.split(" ").map(Number);
    svg.setAttribute("viewBox", `${x} ${y - 10} ${width} ${height + 20}`);
  });

  document.querySelectorAll(".svg-row svg path").forEach((path) => {
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
  });

  const tl = gsap.timeline();

  const introSection = document.querySelector(".intro");

  ScrollTrigger.create({
    trigger: introSection,
    start: "top top",
    end: `+=${window.innerHeight * 8}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    animation: tl,
    onUpdate: (self) => {
      if (self.progress >= 0.5) {
        introSection.classList.add("out");
      } else {
        introSection.classList.remove("out");
      }
    },
  });

  const strokeRevealOrder = [
    "svg-top-1",
    "svg-bottom-1",
    "svg-middle-1",
    "svg-top-2",
    "svg-bottom-2",
    "svg-middle-2",
    "svg-top-3",
    "svg-middle-3",
    "svg-bottom-3",
  ];

  strokeRevealOrder.forEach((id, index) => {
    const paths = document.querySelectorAll(`#${id} path`);
    tl.to(
      paths,
      {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      index * 0.3,
    );
  });

  const curveStrokeOrder = ["svg-curve-1", "svg-curve-2"];
  const curveStartTime = 5 * 0.3 + 0.3;

  curveStrokeOrder.forEach((id, index) => {
    const paths = document.querySelectorAll(`#${id} path`);
    const pathLength = paths[0].getTotalLength();
    const curveStartAt = curveStartTime + index * 1;

    tl.to(
      paths,
      {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.out",
      },
      curveStartAt,
    );

    tl.to(
      paths,
      {
        strokeDashoffset: -pathLength,
        duration: 1.5,
        ease: "power2.inOut",
      },
      curveStartAt + 1,
    );
  });

  const svgRows = document.querySelectorAll(".svg-container .svg-row");

  tl.to(
    svgRows,
    {
      xPercent: 100,
      duration: 2,
      ease: "power3.inOut",
      stagger: 0.15,
    },
    ">-0.5",
  );
});
