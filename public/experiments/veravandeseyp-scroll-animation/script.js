gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const config = {
  driftAmount: 300,
};

const names = gsap.utils.toArray(".name");
const visuals = gsap.utils.toArray(".visual");
const stepCount = names.length - 1;

document.querySelector(".scroll-track").style.height =
  `${(stepCount + 1) * 100}svh`;

let loaded = 0;
names.forEach((name) => {
  fetch(name.dataset.name)
    .then((res) => res.text())
    .then((svg) => {
      name.innerHTML = svg;

      const el = name.querySelector("svg");
      el.setAttribute("preserveAspectRatio", "none");
      el.removeAttribute("width");
      el.removeAttribute("height");

      loaded++;
      if (loaded === names.length) start();
    });
});

function updateNames(progress) {
  const position = progress * stepCount;
  const current = Math.min(Math.floor(position), stepCount - 1);
  const local = gsap.utils.clamp(0, 1, position - current);

  names.forEach((name, i) => {
    if (i < current) {
      gsap.set(name, { scaleY: 0, transformOrigin: "top center" });
    } else if (i === current) {
      gsap.set(name, { scaleY: 1 - local, transformOrigin: "top center" });
    } else if (i === current + 1) {
      gsap.set(name, { scaleY: local, transformOrigin: "bottom center" });
    } else {
      gsap.set(name, { scaleY: 0, transformOrigin: "bottom center" });
    }
  });
}

function updateVisuals(progress) {
  const position = progress * stepCount;

  visuals.forEach((visual) => {
    const project = Number(visual.dataset.project);
    const local = position - (project - 1);

    let scale = 0;
    let yPercent = 0;

    if (local > 0 && local < 1) {
      scale = local;
    } else if (local >= 1 && local < 2) {
      const exit = local - 1;
      scale = 1 - exit;
      yPercent = -exit * config.driftAmount;
    }

    gsap.set(visual, { scale, yPercent, transformOrigin: "bottom left" });
  });
}

function update(progress) {
  updateNames(progress);
  updateVisuals(progress);
}

function start() {
  names.forEach((name, i) => gsap.set(name, { zIndex: i }));
  visuals.forEach((visual, i) =>
    gsap.set(visual, { zIndex: 100 + i, scale: 0 }),
  );

  update(0);

  ScrollTrigger.create({
    trigger: ".scroll-track",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => update(self.progress),
  });
}
