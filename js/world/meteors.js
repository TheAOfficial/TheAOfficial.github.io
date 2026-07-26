// ==========================================
// meteors.js
// Shooting Meteors
// ==========================================

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { scene } from "../core/scene.js";

const meteors = [];

export function createMeteors() {

    const geometry = new THREE.SphereGeometry(0.08, 8, 8);

    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff
    });

    for (let i = 0; i < 25; i++) {

        const meteor = new THREE.Mesh(
            geometry,
            material.clone()
        );

        resetMeteor(meteor);

        meteors.push(meteor);
        scene.add(meteor);
    }

}

function resetMeteor(meteor) {

    meteor.position.set(
        (Math.random() - 0.5) * 250,
        Math.random() * 120 + 20,
        -Math.random() * 300
    );

    meteor.userData.speed =
        0.6 + Math.random() * 1.4;

}

export function animateMeteors() {

    meteors.forEach((meteor) => {

        meteor.position.x += meteor.userData.speed;
        meteor.position.y -= meteor.userData.speed * 0.45;
        meteor.position.z += meteor.userData.speed * 0.2;

        if (
            meteor.position.y < -40 ||
            meteor.position.x > 180
        ) {
            resetMeteor(meteor);
        }

    });

}
