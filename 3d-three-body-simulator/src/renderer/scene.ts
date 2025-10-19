class Scene {
    constructor() {
        this.objects = [];
        this.lights = [];
    }

    addObject(object) {
        this.objects.push(object);
    }

    addLight(light) {
        this.lights.push(light);
    }

    render() {
        // Rendering logic for the scene
    }

    update() {
        // Update logic for the scene
    }
}

export default Scene;