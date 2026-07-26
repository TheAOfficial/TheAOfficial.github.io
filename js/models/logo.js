import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/loaders/GLTFLoader.js";

import { scene } from "../core/scene.js";

let logo;

export function loadLogo() {

    const loader = new GLTFLoader();

    loader.load(
        "assets/models/logo.glb",

        (gltf) => {

            logo = gltf.scene;

            logo.scale.set(2.5, 2.5, 2.5);
            logo.position.set(0, 0, 0);

            scene.add(logo);

        },

        undefined,

        (error) => {

            console.error("Logo Load Error", error);

        }

    );

}

export function animateLogo(time) {

    if (!logo) return;

    logo.rotation.y += 0.004;

    logo.position.y =
        Math.sin(time * 0.0015) * 0.25;

}
