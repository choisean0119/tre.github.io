// src/main.ts
import { Scene } from './renderer/scene';
import { Camera } from './renderer/camera';
import { Controls } from './ui/controls';
import { Integrator } from './simulation/integrator';

const scene = new Scene();
const camera = new Camera();
const controls = new Controls(camera);
const integrator = new Integrator(scene);

function render() {
    requestAnimationFrame(render);
    integrator.update();
    scene.render(camera);
}

function init() {
    scene.setup();
    camera.setup();
    controls.setup();
    render();
}

init();