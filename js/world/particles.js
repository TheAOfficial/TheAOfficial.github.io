// ==========================================
// particles.js
// GPU Floating Particles
// ==========================================

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { scene } from "../core/scene.js";

let particles;

export function createParticles() {

    const count = 50000;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 1000;
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({

        color: 0xffffff,

        size: 0.08,

        transparent: true,

        opacity: 0.9,

        depthWrite: false,

        blending: THREE.AdditiveBlending

    });

    particles = new THREE.Points(
        geometry,
        material
    );

    scene.add(particles);

}

export function animateParticles(time) {

    if (!particles) return;

    particles.rotation.y = time * 0.00002;

    particles.rotation.x =
        Math.sin(time * 0.0001) * 0.05;

}
