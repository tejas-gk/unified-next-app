import gsap from "gsap";

const SENSITIVITY = 0.3;
const LERP = 0.04;
const STAGGER_DELAY = 8;

const hero = document.querySelector(".hero");
const depthLayers = gsap.utils.toArray(".depth-layer");
const totalDepthLayers = depthLayers.length;

const mouse = { x: 0, y: 0 };

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
  mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
});

hero.addEventListener("mouseleave", () => {
  mouse.x = 0;
  mouse.y = 0;
});

const BUFFER_SIZE = totalDepthLayers * STAGGER_DELAY + 1;
const cursorTrail = [];

const layers = depthLayers.map((node, i) => ({
  el: node,
  delay: (totalDepthLayers - 1 - i) * STAGGER_DELAY,
  current: { x: 0, y: 0 },
}));

gsap.ticker.add(() => {
  const rect = hero.getBoundingClientRect();

  cursorTrail.push({
    x: mouse.x * rect.width * SENSITIVITY,
    y: mouse.y * rect.height * SENSITIVITY,
  });

  if (cursorTrail.length > BUFFER_SIZE) {
    cursorTrail.shift();
  }

  layers.forEach((layer) => {
    const trailIndex = Math.max(0, cursorTrail.length - 1 - layer.delay);
    const targetPos = cursorTrail[trailIndex];

    layer.current.x += (targetPos.x - layer.current.x) * LERP;
    layer.current.y += (targetPos.y - layer.current.y) * LERP;

    gsap.set(layer.el, {
      x: layer.current.x,
      y: layer.current.y,
    });
  });
});
