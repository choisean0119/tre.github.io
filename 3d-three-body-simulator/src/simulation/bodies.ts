class Body {
    constructor(mass, position, velocity) {
        this.mass = mass; // 질량
        this.position = position; // 위치 (벡터)
        this.velocity = velocity; // 속도 (벡터)
    }

    updatePosition(timeStep) {
        this.position.x += this.velocity.x * timeStep;
        this.position.y += this.velocity.y * timeStep;
        this.position.z += this.velocity.z * timeStep;
    }

    updateVelocity(acceleration, timeStep) {
        this.velocity.x += acceleration.x * timeStep;
        this.velocity.y += acceleration.y * timeStep;
        this.velocity.z += acceleration.z * timeStep;
    }
}

export { Body };