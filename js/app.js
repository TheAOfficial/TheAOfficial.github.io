// ==========================================
// scene.js
// Three.js Scene
// ==========================================

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";

export let scene;
export let camera;
export let renderer;

export function initScene() {

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050816);

    // Camera
    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        5000
    );

    camera.position.set(0, 2, 8);

    // Renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    document
        .getElementById("three-container")
        .appendChild(renderer.domElement);

    // Ambient Light
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    // Main Light
    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(5, 10, 8);
    scene.add(light);

    // Blue Light
    const blue = new THREE.PointLight(0x00ccff, 50);
    blue.position.set(-8, 5, 4);
    scene.add(blue);

    // Purple Light
    const purple = new THREE.PointLight(0x8a2be2, 50);
    purple.position.set(8, -3, 5);
    scene.add(purple);

    window.addEventListener("resize", onResize);
}

function onResize() {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
}

export function animate() {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
