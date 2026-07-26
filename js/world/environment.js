// ==========================================
// environment.js
// HDR + Reflective Floor
// ==========================================

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { RGBELoader } from "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/loaders/RGBELoader.js";
import { scene, renderer } from "../core/scene.js";

let floor;

export function createEnvironment() {

    // HDR Environment
    const loader = new RGBELoader();

    loader.load("assets/hdr/studio.hdr", (texture) => {

        texture.mapping = THREE.EquirectangularReflectionMapping;

        scene.environment = texture;

    });

    // Reflective Floor
    floor = new THREE.Mesh(

        new THREE.CircleGeometry(300, 128),

        new THREE.MeshPhysicalMaterial({

            color: 0x050816,

            metalness: 1,

            roughness: 0.02,

            transmission: 0.15,

            clearcoat: 1,

            reflectivity: 1

        })

    );

    floor.rotation.x = -Math.PI / 2;

    floor.position.y = -3;

    scene.add(floor);

}

export function animateEnvironment(time) {

    if (!floor) return;

    floor.rotation.z += 0.00008;

}
