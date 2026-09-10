import * as THREE from "three";
import Lenis from "lenis";
import { vertexShader, fragmentShader } from "./shaders.js";

const lenis = new Lenis({ autoRaf: true });

const CONFIG = {
  totalImages: 10,
  tilesPerRevolution: 15,
  revolutions: 5,
  startRadius: 5,
  endRadius: 3.5,
  tileHeightRatio: 1.1,
  tileSegments: 24,
  spiralGap: 0.35,
  tileOverlap: 0.005,
  cameraZ: 12,
  cameraSmoothing: 0.075,
  baseRotationSpeed: 0.001,
  scrollRotationMultiplier: 0.0035,
  rotationDecay: 0.9,
  scrollMultiplier: 1.25,
  cameraYMultiplier: 0.2,
  parallaxStrength: 0.1,
};

const heroSection = document.querySelector(".hero");

const totalTiles = Math.floor(CONFIG.tilesPerRevolution * CONFIG.revolutions);
const angleStep = (Math.PI * 2) / CONFIG.tilesPerRevolution;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  heroSection.clientWidth / heroSection.clientHeight,
  0.1,
  1000,
);
camera.position.z = CONFIG.cameraZ;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(heroSection.clientWidth, heroSection.clientHeight);
heroSection.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const textures = Array.from({ length: CONFIG.totalImages }, (_, i) =>
  textureLoader.load(`img${i + 1}.jpg`, (t) => {
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  }),
);

const cameraPositionUniform = {
  value: new THREE.Vector3(0, 0, CONFIG.cameraZ),
};

const tileEdgesY = [0];

for (let i = 0; i < totalTiles; i++) {
  const progress = i / totalTiles;
  const radius =
    CONFIG.startRadius + (CONFIG.endRadius - CONFIG.startRadius) * progress;
  const arcWidth = (2 * Math.PI * radius) / CONFIG.tilesPerRevolution;
  const tileHeight = arcWidth * CONFIG.tileHeightRatio;
  tileEdgesY.push(
    tileEdgesY[i] - (tileHeight + CONFIG.spiralGap) / CONFIG.tilesPerRevolution,
  );
}

const spiral = new THREE.Group();
scene.add(spiral);

for (let i = 0; i < totalTiles; i++) {
  const progress = i / totalTiles;
  const radius =
    CONFIG.startRadius + (CONFIG.endRadius - CONFIG.startRadius) * progress;
  const arcWidth = (2 * Math.PI * radius) / CONFIG.tilesPerRevolution;
  const tileHeight = arcWidth * CONFIG.tileHeightRatio;
  const tileAngle = arcWidth / radius + CONFIG.tileOverlap;

  const centerY = (tileEdgesY[i] + tileEdgesY[i + 1]) / 2;
  const slope = tileEdgesY[i + 1] - tileEdgesY[i];

  const positions = [];
  const uvCoords = [];
  const indices = [];
  const segments = CONFIG.tileSegments;

  for (let row = 0; row <= 1; row++) {
    for (let col = 0; col <= segments; col++) {
      const angle = (col / segments - 0.5) * tileAngle;
      positions.push(
        Math.sin(angle) * radius,
        (row - 0.5) * tileHeight + (col / segments - 0.5) * slope,
        Math.cos(angle) * radius,
      );
      uvCoords.push(col / segments, row);
    }
  }

  for (let col = 0; col < segments; col++) {
    const current = col;
    const below = current + segments + 1;
    indices.push(current, below, current + 1, below, below + 1, current + 1);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvCoords, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uMap: { value: textures[i % CONFIG.totalImages] },
      uCameraPosition: cameraPositionUniform,
    },
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = centerY;

  const tile = new THREE.Group();
  tile.rotation.y = i * angleStep;
  tile.add(mesh);
  spiral.add(tile);
}

const spiralHeight = Math.abs(tileEdgesY[totalTiles]);

let scrollY = 0;
let spinVelocity = 0;

lenis.on("scroll", (e) => {
  scrollY = window.pageYOffset;
  spinVelocity = e.velocity * CONFIG.scrollRotationMultiplier;
});

let mouseX = 0,
  mouseY = 0,
  smoothX = 0,
  smoothY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

let isMobile = window.innerWidth < 1000;

function animate() {
  requestAnimationFrame(animate);

  const progress = Math.min(
    scrollY / (window.innerHeight * CONFIG.scrollMultiplier),
    1,
  );
  camera.position.y +=
    (-(progress * spiralHeight * CONFIG.cameraYMultiplier) -
      camera.position.y) *
    CONFIG.cameraSmoothing;

  if (!isMobile) {
    smoothX += (mouseX - smoothX) * 0.02;
    smoothY += (mouseY - smoothY) * 0.02;
    spiral.rotation.x = smoothY * CONFIG.parallaxStrength;
    spiral.rotation.z = -smoothX * CONFIG.parallaxStrength * 0.3;
  }

  cameraPositionUniform.value.copy(camera.position);

  spiral.rotation.y += CONFIG.baseRotationSpeed + spinVelocity;
  spinVelocity *= CONFIG.rotationDecay;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  isMobile = window.innerWidth < 1000;
  camera.aspect = heroSection.clientWidth / heroSection.clientHeight;
  camera.position.z = isMobile ? 15 : CONFIG.cameraZ;
  camera.updateProjectionMatrix();
  renderer.setSize(heroSection.clientWidth, heroSection.clientHeight);
});
