import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { PROJECTS } from "./projects.js";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const projectsSection = document.querySelector(".projects");
  const PROJECTS_PER_ROW = 9;
  const TOTAL_ROWS = 10;

  let currentProjectIndex = 0;

  for (let r = 0; r < TOTAL_ROWS; r++) {
    const rowEl = document.createElement("div");
    rowEl.classList.add("projects-row");

    for (let c = 0; c < PROJECTS_PER_ROW; c++) {
      const { name, year, img } =
        PROJECTS[currentProjectIndex % PROJECTS.length];
      currentProjectIndex++;

      const projectEl = document.createElement("div");
      projectEl.classList.add("project");
      projectEl.innerHTML = `
        <div class="project-img">
          <img src="${img}" alt="${name}" />
        </div>
        <div class="project-info">
          <p>${name}</p>
          <p>${year}</p>
        </div>
      `;
      rowEl.appendChild(projectEl);
    }

    projectsSection.appendChild(rowEl);
  }

  const projectRows = document.querySelectorAll(".projects-row");
  const isMobile = window.innerWidth < 1000;
  let rowStartWidth = isMobile ? 250 : 125;
  let rowEndWidth = isMobile ? 750 : 500;

  const firstProjectRow = projectRows[0];
  firstProjectRow.style.width = `${rowEndWidth}%`;
  const expandedRowHeight = firstProjectRow.offsetHeight;
  firstProjectRow.style.width = "";

  const sectionGap = parseFloat(getComputedStyle(projectsSection).gap) || 0;
  const sectionPadding =
    parseFloat(getComputedStyle(projectsSection).paddingTop) || 0;

  const expandedSectionHeight =
    expandedRowHeight * projectRows.length +
    sectionGap * (projectRows.length - 1) +
    sectionPadding * 2;

  projectsSection.style.height = `${expandedSectionHeight}px`;

  function onScrollUpdate() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    projectRows.forEach((row) => {
      const rect = row.getBoundingClientRect();
      const rowTop = rect.top + scrollY;
      const rowBottom = rowTop + rect.height;

      const scrollStart = rowTop - viewportHeight;
      const scrollEnd = rowBottom;

      let progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      progress = Math.max(0, Math.min(1, progress));

      const width = rowStartWidth + (rowEndWidth - rowStartWidth) * progress;
      row.style.width = `${width}%`;
    });
  }

  gsap.ticker.add(onScrollUpdate);

  window.addEventListener("resize", () => {
    const isMobile = window.innerWidth < 1000;
    rowStartWidth = isMobile ? 250 : 125;
    rowEndWidth = isMobile ? 750 : 500;

    firstProjectRow.style.width = `${rowEndWidth}%`;
    const newRowHeight = firstProjectRow.offsetHeight;
    firstProjectRow.style.width = "";

    const newSectionHeight =
      newRowHeight * projectRows.length +
      sectionGap * (projectRows.length - 1) +
      sectionPadding * 2;

    projectsSection.style.height = `${newSectionHeight}px`;
  });
});
