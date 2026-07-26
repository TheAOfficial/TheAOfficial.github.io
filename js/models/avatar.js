import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/loaders/GLTFLoader.js";

import { scene } from "../core/scene.js";

let avatar;

export function loadAvatar() {

    const loader = new GLTFLoader();

    loader.load(

        "assets/models/avatar.glb",

        (gltf) => {

            avatar = gltf.scene;

            avatar.scale.set(1.8, 1.8, 1.8);

            avatar.position.set(0, -1.5, -4);

            scene.add(avatar);

        },

        undefined,

        (error) => {

            console.error(error);

        }

    );

}

export function animateAvatar(time) {

    if (!avatar) return;

    avatar.position.y =
        -1.5 + Math.sin(time * 0.0015) * 0.08;

    avatar.rotation.y =
        Math.sin(time * 0.0005) * 0.3;

}
