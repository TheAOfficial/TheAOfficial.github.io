// ==========================================
// nebula.js
// Black Hole + Nebula
// ==========================================

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { scene } from "../core/scene.js";

let blackHole;
let nebula;

export function createNebula() {

    // Black Hole
    const holeGeometry = new THREE.TorusGeometry(4, 0.4, 32, 150);

    const holeMaterial = new THREE.MeshPhysicalMaterial({

        color: 0x7d3cff,

        emissive: 0x4400ff,

        emissiveIntensity: 8,

        metalness: 1,

        roughness: 0

    });

    blackHole = new THREE.Mesh(
        holeGeometry,
        holeMaterial
    );

    blackHole.position.set(0, 6, -60);

    scene.add(blackHole);

    // Nebula Glow
    const glowGeometry = new THREE.SphereGeometry(
        18,
        64,
        64
    );

    const glowMaterial = new THREE.MeshBasicMaterial({

        color: 0x6d5cff,

        transparent: true,

        opacity: 0.08,

        side: THREE.BackSide

    });

    nebula = new THREE.Mesh(
        glowGeometry,
        glowMaterial
    );

    nebula.position.copy(
        blackHole.position
    );

    scene.add(nebula);

}

export function animateNebula(time) {

    if (!blackHole) return;

    blackHole.rotation.z += 0.01;

    blackHole.rotation.y += 0.003;

    nebula.rotation.y -= 0.0005;

    nebula.scale.x =
        1 + Math.sin(time * 0.001) * 0.04;

    nebula.scale.y =
        1 + Math.sin(time * 0.001) * 0.04;

    nebula.scale.z =
        1 + Math.sin(time * 0.001) * 0.04;

}
