class Integrator {
    constructor(bodies, forces) {
        this.bodies = bodies;
        this.forces = forces;
        this.timeStep = 0.01; // Time step for the simulation
    }

    updatePositions() {
        for (let body of this.bodies) {
            body.position.add(body.velocity.clone().multiplyScalar(this.timeStep));
        }
    }

    updateVelocities() {
        for (let body of this.bodies) {
            const force = this.forces.calculateNetForce(body);
            const acceleration = force.clone().divideScalar(body.mass);
            body.velocity.add(acceleration.multiplyScalar(this.timeStep));
        }
    }

    integrate() {
        this.updateVelocities();
        this.updatePositions();
    }
}