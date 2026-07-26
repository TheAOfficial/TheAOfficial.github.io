// ==========================================
// galaxy.js
// Infinite Galaxy
// ==========================================

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { scene } from "./scene.js";

let stars;

export function createGalaxy() {

    const geometry = new THREE.BufferGeometry();

    const vertices = [];
    const colors = [];

    for (let i = 0; i < 10000; i++) {

        vertices.push(
            (Math.random() - 0.5) * 3000,
            (Math.random() - 0.5) * 3000,
            (Math.random() - 0.5) * 3000
        );

        colors.push(
            0.6 + Math.random() * 0.4,
            0.6 + Math.random() * 0.4,
            1.0
        );
    }

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
    );

    geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
    );

    const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false
    });

    stars = new THREE.Points(geometry, material);

    scene.add(stars);
}

export function animateGalaxy() {

    if (!stars) return;

    stars.rotation.y += 0.0002;
    stars.rotation.x += 0.00005;
}
