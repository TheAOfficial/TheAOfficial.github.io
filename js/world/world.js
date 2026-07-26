// js/world/world.js

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { scene } from "../core/scene.js";

let world;

export function createWorld() {

    world = new THREE.Group();

    // Floor
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(2000, 2000),
        new THREE.MeshStandardMaterial({
            color: 0x050816,
            metalness: 0.8,
            roughness: 0.25
        })
    );

    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -3;

    world.add(floor);

    // Floating Spheres
    for (let i = 0; i < 40; i++) {

        const sphere = new THREE.Mesh(
            new THREE.IcosahedronGeometry(
                Math.random() * 0.4 + 0.2,
                1
            ),
            new THREE.MeshPhysicalMaterial({
                color: 0x00e5ff,
                emissive: 0x0088ff,
                emissiveIntensity: 2,
                metalness: 1,
                roughness: 0.15
            })
        );

        sphere.position.set(
            (Math.random() - 0.5) * 120,
            Math.random() * 20,
            -Math.random() * 200
        );

        world.add(sphere);
    }

    scene.add(world);

}

export function animateWorld(time) {

    if (!world) return;

    world.children.forEach((obj, i) => {

        if (i === 0) return;

        obj.rotation.x += 0.003;
        obj.rotation.y += 0.004;

        obj.position.y +=
            Math.sin(time * 0.001 + i) * 0.002;

    });

}
