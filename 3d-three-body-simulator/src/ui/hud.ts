class HUD {
    constructor() {
        this.infoElement = document.createElement('div');
        this.infoElement.style.position = 'absolute';
        this.infoElement.style.top = '10px';
        this.infoElement.style.left = '10px';
        this.infoElement.style.color = 'white';
        this.infoElement.style.fontFamily = 'Arial, sans-serif';
        this.infoElement.style.zIndex = '1000';
        document.body.appendChild(this.infoElement);
    }

    update(simulationState) {
        this.infoElement.innerHTML = `
            <h3>Simulation Status</h3>
            <p>Time: ${simulationState.time.toFixed(2)} s</p>
            <p>Body 1: Position (${simulationState.bodies[0].position.x.toFixed(2)}, ${simulationState.bodies[0].position.y.toFixed(2)}, ${simulationState.bodies[0].position.z.toFixed(2)})</p>
            <p>Body 2: Position (${simulationState.bodies[1].position.x.toFixed(2)}, ${simulationState.bodies[1].position.y.toFixed(2)}, ${simulationState.bodies[1].position.z.toFixed(2)})</p>
            <p>Body 3: Position (${simulationState.bodies[2].position.x.toFixed(2)}, ${simulationState.bodies[2].position.y.toFixed(2)}, ${simulationState.bodies[2].position.z.toFixed(2)})</p>
        `;
    }
}

export default HUD;