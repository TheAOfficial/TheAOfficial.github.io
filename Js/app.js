// ==========================================
// AVX / A Official 3D Portfolio
// app.js
// Main Application
// ==========================================

import { initScene, animate } from "./scene.js";
import { initCamera } from "./camera.js";
import { initScroll } from "./scroll.js";
import { initAnimations } from "./animations.js";

window.addEventListener("DOMContentLoaded", () => {

    console.clear();

    console.log("%cA 3D Portfolio",
        "font-size:28px;color:#00e5ff;font-weight:bold;"
    );

    // Scene
    initScene();

    // Camera
    initCamera();

    // Scroll
    initScroll();

    // GSAP Animations
    initAnimations();

    // Start Render Loop
    animate();

});
