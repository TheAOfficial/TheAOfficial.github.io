// ==========================================
// camera.js
// Cinematic Camera Controller
// ==========================================

import { camera } from "./scene.js";

let targetY = 0;
let currentY = 0;

let mouseX = 0;
let mouseY = 0;

export function initCamera() {

    window.addEventListener("scroll", () => {

        targetY = window.scrollY * 0.008;

    });

    window.addEventListener("mousemove", (e) => {

        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    });

}

export function updateCamera() {

    currentY += (targetY - currentY) * 0.05;

    camera.position.y = currentY;

    camera.position.x += ((mouseX * 1.5) - camera.position.x) * 0.03;

    camera.lookAt(0, currentY, 0);

}
