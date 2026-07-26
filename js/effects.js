// ==========================================
// effects.js
// Bloom & Post Processing
// ==========================================

import { EffectComposer } from "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/postprocessing/UnrealBloomPass.js";

import { scene, camera, renderer } from "./scene.js";

export let composer;

export function initEffects() {

    composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloom = new UnrealBloomPass(
        { x: window.innerWidth, y: window.innerHeight },
        1.5,   // strength
        0.5,   // radius
        0.2    // threshold
    );

    composer.addPass(bloom);

    window.addEventListener("resize", () => {

        composer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    });

}
