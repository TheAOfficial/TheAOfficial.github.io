// ==========================================
// animationLoop.js
// Master Render Loop
// ==========================================

import { renderer, scene, camera } from "./scene.js";
import { composer } from "../effects/postprocessing.js";

import { animateGalaxy } from "../world/galaxy.js";
import { animateWorld } from "../world/world.js";
import { animateLogo } from "../models/logo.js";
import { animateAvatar } from "../models/avatar.js";
import { updateScroll } from "../scroll.js";

const clock = new THREE.Clock();

export function startAnimationLoop() {

    function render() {

        requestAnimationFrame(render);

        const time = performance.now();
        const delta = clock.getDelta();

        updateScroll();

        animateGalaxy(time);
        animateWorld(time);

        animateLogo(time);
        animateAvatar(time);

        if (composer) {
            composer.render(delta);
        } else {
            renderer.render(scene, camera);
        }

    }

    render();

}
