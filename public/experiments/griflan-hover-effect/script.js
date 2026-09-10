import gsap from "gsap";
import Matter from "matter-js";

const services = document.querySelectorAll(".service");

const { Engine, World, Bodies, Body } = Matter;

function getTagDimensions(label) {
  const ghostTag = document.createElement("div");
  ghostTag.classList.add("tag");
  ghostTag.textContent = label;
  document.body.appendChild(ghostTag);
  const size = { width: ghostTag.offsetWidth, height: ghostTag.offsetHeight };
  ghostTag.remove();
  return size;
}

services.forEach((service) => {
  const serviceImages = service.querySelectorAll(".img");
  const serviceName = service.querySelector("h1");

  const tagLabels = service.dataset.tags.split(",");
  const tagSizes = tagLabels.map((label) => getTagDimensions(label));

  let engine = null;
  let tagElements = [];
  let tagBodies = [];
  let rafId = null;
  let tagsContainer = null;
  let isHovered = false;
  let tagDropTimer = null;

  function createTags() {
    cleanupTags();

    const serviceWidth = service.offsetWidth;
    const serviceHeight = service.offsetHeight;

    tagsContainer = document.createElement("div");
    tagsContainer.classList.add("tags-container");
    service.appendChild(tagsContainer);

    engine = Engine.create({ gravity: { x: 0, y: 2 } });

    const wallThickness = 20;
    const floorOffset = window.innerWidth < 1000 ? 25 : 50;

    const floor = Bodies.rectangle(
      serviceWidth / 2,
      serviceHeight - floorOffset + wallThickness / 2,
      serviceWidth * 3,
      wallThickness,
      { isStatic: true },
    );

    const leftWall = Bodies.rectangle(
      -wallThickness / 2,
      serviceHeight / 2,
      wallThickness,
      serviceHeight * 3,
      { isStatic: true },
    );

    const rightWall = Bodies.rectangle(
      serviceWidth + wallThickness / 2,
      serviceHeight / 2,
      wallThickness,
      serviceHeight * 3,
      { isStatic: true },
    );

    World.add(engine.world, [floor, leftWall, rightWall]);

    tagLabels.forEach((label, i) => {
      const tagElement = document.createElement("div");
      tagElement.classList.add("tag");
      tagElement.textContent = label;
      tagsContainer.appendChild(tagElement);

      const tagWidth = tagSizes[i].width;
      const tagHeight = tagSizes[i].height;

      const startX = serviceWidth * 0.25 + Math.random() * serviceWidth * 0.5;
      const startY = -(tagHeight / 2) - i * 5;
      const angle = (Math.random() - 0.5) * 0.4;

      const body = Bodies.rectangle(startX, startY, tagWidth, tagHeight, {
        chamfer: { radius: tagHeight / 2 },
        restitution: 0.15,
        friction: 0.6,
        density: 0.002,
      });

      Body.setAngle(body, angle);
      World.add(engine.world, body);

      gsap.to(tagElement, {
        opacity: 1,
        duration: 0.3,
        delay: i * 0.04,
        ease: "power2.out",
      });

      tagElements.push(tagElement);
      tagBodies.push(body);
    });

    function update() {
      Engine.update(engine, 1000 / 60);

      for (let i = 0; i < tagElements.length; i++) {
        const body = tagBodies[i];
        const tagElement = tagElements[i];
        const tagWidth = tagSizes[i].width;
        const tagHeight = tagSizes[i].height;

        tagElement.style.transform = `translate(${body.position.x - tagWidth / 2}px, ${body.position.y - tagHeight / 2}px) rotate(${body.angle}rad)`;
      }

      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);
  }

  function cleanupTags() {
    if (rafId) cancelAnimationFrame(rafId);
    if (engine) Engine.clear(engine);
    if (tagsContainer) tagsContainer.remove();
    tagElements = [];
    tagBodies = [];
    engine = null;
    rafId = null;
    tagsContainer = null;
  }

  service.addEventListener("mouseenter", () => {
    isHovered = true;
    const expandedHeight = window.innerWidth < 1000 ? "12.5rem" : "25rem";

    gsap.killTweensOf(service);
    gsap.killTweensOf(serviceImages);
    gsap.killTweensOf(serviceName);

    gsap.to(service, {
      height: expandedHeight,
      duration: 0.75,
      ease: "elastic.out(1,0.5)",
    });

    gsap.to(serviceName, {
      color: "#FFFFD9",
      duration: 0.25,
      ease: "power4.out",
    });

    gsap.to(serviceImages, {
      y: "-50%",
      duration: 0.75,
      ease: "elastic.out(1,0.5)",
      stagger: 0.075,
    });

    tagDropTimer = gsap.delayedCall(0.2, () => {
      if (isHovered) createTags();
    });
  });

  service.addEventListener("mouseleave", () => {
    isHovered = false;
    const collapsedHeight = window.innerWidth < 1000 ? "5rem" : "10rem";

    if (tagDropTimer) tagDropTimer.kill();

    gsap.killTweensOf(service);
    gsap.killTweensOf(serviceImages);
    gsap.killTweensOf(serviceName);

    if (tagElements.length) {
      gsap.to(tagElements, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
        onComplete: cleanupTags,
      });
    } else {
      cleanupTags();
    }

    gsap.to(serviceName, {
      color: "#ff3831",
      duration: 0.25,
      ease: "power4.out",
    });

    gsap.to(serviceImages, {
      y: "50%",
      duration: 0.75,
      ease: "elastic.out(1,0.5)",
      stagger: 0.075,
    });

    gsap.to(service, {
      height: collapsedHeight,
      duration: 0.5,
      ease: "elastic.out(1,0.75)",
    });
  });
});
