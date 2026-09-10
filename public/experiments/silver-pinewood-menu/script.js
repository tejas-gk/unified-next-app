import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggler = document.querySelector(".menu-toggler");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuTogglerText = menuToggler.querySelector("p");

  let isMenuOpen = false;
  let isAnimating = false;

  menuToggler.addEventListener("click", () => {
    if (isAnimating) return;

    isMenuOpen = !isMenuOpen;
    isAnimating = true;

    if (isMenuOpen) {
      gsap.to(menuOverlay, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        onStart: () => {
          menuOverlay.style.pointerEvents = "all";
        },
        onComplete: () => {
          isAnimating = false;
        },
      });
      menuTogglerText.textContent = "Close";
    } else {
      gsap.to(menuOverlay, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        onComplete: () => {
          menuOverlay.style.pointerEvents = "none";
          isAnimating = false;
        },
      });
      menuTogglerText.textContent = "Menu";
    }
  });

  const menuItems = document.querySelectorAll(".menu-item a");

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        backgroundSize: "100% 100%",
        duration: 0.75,
        ease: "power2.out",
        overwrite: true,
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        backgroundSize: "0% 100%",
        duration: 0.25,
        ease: "power2.out",
        overwrite: true,
      });
    });
  });

  const config = {
    canvasBg: "#1a1a1a",
    modelPath: "/experiments/silver-pinewood-menu/model.glb",
    metalness: 0.55,
    roughness: 0.75,
    baseZoom: 0.35,
    baseCamPosX: window.innerWidth < 1000 ? 0 : -0.75,
    baseCamPosY: -1.25,
    baseCamPosZ: 0,
    baseRotationX: 0,
    baseRotationY: 0.3,
    baseRotationZ: 0,
    ambientIntensity: 0.25,
    keyIntensity: 0.5,
    keyPosX: 2.5,
    keyPosY: 10,
    keyPosZ: 10,
    fillIntensity: 1.5,
    fillPosX: -5,
    fillPosY: 2.5,
    fillPosZ: -2.5,
    rimIntensity: 2.5,
    rimPosX: -7.5,
    rimPosY: 5,
    rimPosZ: -10,
    topIntensity: 0.5,
    topPosX: 0,
    topPosY: 15,
    topPosZ: 0,
    cursorLightEnabled: true,
    cursorLightIntensity: 2.5,
    cursorLightColor: 0xffffff,
    cursorLightDistance: 7.5,
    cursorLightDecay: 2,
    cursorLightPosZ: 1.25,
    cursorLightSmoothness: 0.5,
    cursorLightScale: 1,
    parallaxSensitivityX: 0.25,
    parallaxSensitivityY: 0.05,
  };

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(config.canvasBg);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const canvas = document.querySelector("canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  const ambientLight = new THREE.AmbientLight(
    0xffffff,
    config.ambientIntensity
  );
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, config.keyIntensity);
  keyLight.position.set(config.keyPosX, config.keyPosY, config.keyPosZ);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 4096;
  keyLight.shadow.mapSize.height = 4096;
  keyLight.shadow.camera.near = 0.1;
  keyLight.shadow.camera.far = 100;
  keyLight.shadow.bias = -0.00005;
  keyLight.shadow.normalBias = 0.05;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, config.fillIntensity);
  fillLight.position.set(config.fillPosX, config.fillPosY, config.fillPosZ);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, config.rimIntensity);
  rimLight.position.set(config.rimPosX, config.rimPosY, config.rimPosZ);
  scene.add(rimLight);

  const topLight = new THREE.DirectionalLight(0xffffff, config.topIntensity);
  topLight.position.set(config.topPosX, config.topPosY, config.topPosZ);
  scene.add(topLight);

  const loader = new GLTFLoader();
  let model;
  let modelCenter = new THREE.Vector3();

  loader.load(config.modelPath, (gltf) => {
    model = gltf.scene;

    model.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;

        if (node.material) {
          node.material.metalness = config.metalness;
          node.material.roughness = config.roughness;
          node.material.needsUpdate = true;
        }
      }
    });

    const box = new THREE.Box3().setFromObject(model);
    modelCenter = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    model.position.set(
      -modelCenter.x + config.baseCamPosX,
      -modelCenter.y + config.baseCamPosY,
      -modelCenter.z + config.baseCamPosZ
    );

    model.rotation.set(
      config.baseRotationX,
      config.baseRotationY,
      config.baseRotationZ
    );

    const maxDim = Math.max(size.x, size.y, size.z);
    camera.position.z = maxDim * config.baseZoom;
    camera.lookAt(0, 0, 0);

    scene.add(model);
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    config.baseCamPosX = window.innerWidth < 1000 ? 0 : -0.75;
    if (model) {
      model.position.set(
        -modelCenter.x + config.baseCamPosX,
        -modelCenter.y + config.baseCamPosY,
        -modelCenter.z + config.baseCamPosZ
      );
    }
  });

  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;
  let currentRotationX = 0;
  let currentRotationY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  const cursorLight = new THREE.PointLight(
    config.cursorLightColor,
    config.cursorLightIntensity,
    config.cursorLightDistance,
    config.cursorLightDecay
  );
  cursorLight.position.set(0, 0, config.cursorLightPosZ);
  cursorLight.visible = config.cursorLightEnabled;
  scene.add(cursorLight);

  let cursorLightTargetX = 0;
  let cursorLightTargetY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    cursorLightTargetX = mouseX * config.cursorLightScale;
    cursorLightTargetY = mouseY * config.cursorLightScale;
  });

  function animate() {
    requestAnimationFrame(animate);

    if (model) {
      targetRotationY = mouseX * config.parallaxSensitivityX;
      targetRotationX = -mouseY * config.parallaxSensitivityY;

      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      model.rotation.x = config.baseRotationX + currentRotationX;
      model.rotation.y = config.baseRotationY + currentRotationY;
      model.rotation.z = config.baseRotationZ;
    }

    cursorLight.position.x +=
      (cursorLightTargetX - cursorLight.position.x) *
      config.cursorLightSmoothness;
    cursorLight.position.y +=
      (cursorLightTargetY - cursorLight.position.y) *
      config.cursorLightSmoothness;

    renderer.render(scene, camera);
  }
  animate();
});
