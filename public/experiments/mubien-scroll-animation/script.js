import { projects } from "./project.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const workContainer = document.querySelector(".work");

  const createWorkItem = (project) => {
    const workItem = document.createElement("div");
    workItem.className = "work-item";
    workItem.innerHTML = `
      <a href="${project.route}" class="work-item-link">
        <div class="work-item-img">
          <img src="${project.img}" alt="${project.name}" />
        </div>
        <div class="work-item-copy">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        </div>
      </a>
    `;
    return workItem;
  };

  for (let i = 0; i < projects.length * 2; i += 2) {
    const row = document.createElement("div");
    row.className = "row";

    const leftItemIndex = i % projects.length;
    const rightItemIndex = (i + 1) % projects.length;

    row.appendChild(createWorkItem(projects[leftItemIndex]));

    if (i + 1 < projects.length * 2) {
      row.appendChild(createWorkItem(projects[rightItemIndex]));
    }

    workContainer.appendChild(row);
  }

  gsap.set(".work-item", {
    y: 1000,
  });

  document.querySelectorAll(".row").forEach((row) => {
    const workItems = row.querySelectorAll(".work-item");

    workItems.forEach((item, itemIndex) => {
      const isLeftProjectItem = itemIndex === 0;
      gsap.set(item, {
        rotation: isLeftProjectItem ? -60 : 60,
        transformOrigin: "center center",
      });
    });

    ScrollTrigger.create({
      trigger: row,
      start: "top 50%",
      onEnter: () => {
        gsap.to(workItems, {
          y: 0,
          rotation: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.25,
        });
      },
    });
  });
});
