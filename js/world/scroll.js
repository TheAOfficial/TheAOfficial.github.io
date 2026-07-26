// ==========================================
// scroll.js
// Scroll Camera Timeline
// ==========================================

import { camera } from "./scene.js";

let scrollProgress = 0;
let targetProgress = 0;

export function initScroll() {

    window.addEventListener("scroll", () => {

        const maxScroll =
            document.body.scrollHeight - window.innerHeight;

        targetProgress = window.scrollY / maxScroll;

    });

}

export function updateScroll() {

    scrollProgress +=
        (targetProgress - scrollProgress) * 0.05;

    // Camera Journey
    camera.position.z = 8 - scrollProgress * 40;

    camera.position.y = scrollProgress * 15;

    camera.position.x =
        Math.sin(scrollProgress * Math.PI * 2) * 2.5;

    camera.lookAt(
        0,
        scrollProgress * 10,
        -40
    );

}
