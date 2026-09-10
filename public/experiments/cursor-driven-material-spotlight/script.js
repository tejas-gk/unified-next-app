import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import {
  vertexPars,
  vertexMain,
  fragmentPars,
  fragmentMain,
} from "./shaders.js";

const spotlight = document.querySelector(".spotlight");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  spotlight.clientWidth / spotlight.clientHeight,
  0.1,
  100,
);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(spotlight.clientWidth, spotlight.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0xdddcd7);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.65;
spotlight.appendChild(renderer.domElement);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment()).texture;
pmrem.dispose();

const config = { radius: 0.15, softness: 0.35, lerp: 0.05 };
const shaders = [];
const uHit = new THREE.Vector3(0, 100, 0);
const target = new THREE.Vector3(0, 100, 0);
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const planeHit = new THREE.Vector3();
let uActive = 0;
let active = false;

new GLTFLoader().load("/experiments/cursor-driven-material-spotlight/model.glb", (gltf) => {
  const model = gltf.scene;
  const box = new THREE.Box3().setFromObject(model);
  model.position.sub(box.getCenter(new THREE.Vector3()));

  const size = box.getSize(new THREE.Vector3());
  const dist =
    Math.max(size.x, size.y, size.z) /
    (2 * Math.tan((camera.fov * Math.PI) / 180 / 2));
  camera.position.set(0, 0, dist * 1.75);
  camera.lookAt(0, 0, 0);

  model.traverse((node) => {
    if (!node.isMesh) return;
    node.material.roughness = 0.95;
    node.material.onBeforeCompile = (shader) => {
      shader.uniforms.uHitPoint = { value: uHit };
      shader.uniforms.uActive = { value: 0 };
      shader.uniforms.uRadius = { value: config.radius };
      shader.uniforms.uSoftness = { value: config.softness };

      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", `#include <common>\n${vertexPars}`)
        .replace(
          "#include <worldpos_vertex>",
          `#include <worldpos_vertex>\n${vertexMain}`,
        );

      shader.fragmentShader = shader.fragmentShader
        .replace("#include <common>", `#include <common>\n${fragmentPars}`)
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>\n${fragmentMain}`,
        );

      shaders.push(shader);
    };
    node.material.needsUpdate = true;
  });

  scene.add(model);
});

spotlight.addEventListener("mousemove", (e) => {
  const r = spotlight.getBoundingClientRect();
  mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  active = true;
});

spotlight.addEventListener("mouseleave", () => {
  active = false;
});

function animate() {
  requestAnimationFrame(animate);

  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, planeHit);
  target.copy(planeHit);

  uHit.lerp(target, config.lerp);
  uActive += ((active ? 1 : 0) - uActive) * config.lerp;

  for (const s of shaders) {
    s.uniforms.uHitPoint.value.copy(uHit);
    s.uniforms.uActive.value = uActive;
  }

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = spotlight.clientWidth / spotlight.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(spotlight.clientWidth, spotlight.clientHeight);
});
