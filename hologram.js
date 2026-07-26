// ==========================================
// hologram.js
// 3D Hologram Panels
// ==========================================

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { scene } from "../core/scene.js";

const holograms = [];

export function createHolograms() {

    const positions = [
        { x: 0,  y: 2,  z: -20 }, // About
        { x: -6, y: 6,  z: -50 }, // Skills
        { x: 6,  y: 10, z: -90 }  // Projects
    ];

    positions.forEach((p, i) => {

        const panel = new THREE.Mesh(

            new THREE.PlaneGeometry(5, 3),

            new THREE.MeshPhysicalMaterial({

                color: 0x00e5ff,
                transparent: true,
                opacity: 0.18,
                transmission: 1,
                roughness: 0,
                metalness: 0.2,
                emissive: 0x00bfff,
                emissiveIntensity: 2,
                side: THREE.DoubleSide

            })

        );

        panel.position.set(p.x, p.y, p.z);

        scene.add(panel);

        holograms.push(panel);

    });

}

export function animateHolograms(time) {

    holograms.forEach((panel, index) => {

        panel.rotation.y += 0.002;

        panel.position.y +=
            Math.sin(time * 0.001 + index) * 0.002;

    });

}
