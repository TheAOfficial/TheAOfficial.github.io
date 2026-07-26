// ==========================================
// timeline.js
// Cinematic Timeline
// ==========================================

import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js";

import { camera } from "./scene.js";

gsap.registerPlugin(ScrollTrigger);

export function initTimeline() {

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }

    });

    // Hero
    tl.to(camera.position, {
        x: 0,
        y: 1,
        z: 8,
        duration: 1
    });

    // About
    tl.to(camera.position, {
        x: 2,
        y: 3,
        z: 3,
        duration: 1
    });

    // Skills
    tl.to(camera.position, {
        x: -2,
        y: 6,
        z: -5,
        duration: 1
    });

    // Projects
    tl.to(camera.position, {
        x: 1,
        y: 10,
        z: -15,
        duration: 1
    });

    // Contact
    tl.to(camera.position, {
        x: 0,
        y: 14,
        z: -25,
        duration: 1
    });

}
