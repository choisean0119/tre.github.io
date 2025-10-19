class Camera {
    constructor(position, target, up) {
        this.position = position;
        this.target = target;
        this.up = up;
        this.viewMatrix = this.calculateViewMatrix();
    }

    calculateViewMatrix() {
        const zAxis = this.normalize(this.subtract(this.position, this.target));
        const xAxis = this.normalize(this.cross(this.up, zAxis));
        const yAxis = this.cross(zAxis, xAxis);

        return [
            [...xAxis, -this.dot(xAxis, this.position)],
            [...yAxis, -this.dot(yAxis, this.position)],
            [...zAxis, -this.dot(zAxis, this.position)],
            [0, 0, 0, 1]
        ];
    }

    normalize(vector) {
        const length = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
        return vector.map(val => val / length);
    }

    subtract(a, b) {
        return a.map((val, index) => val - b[index]);
    }

    cross(a, b) {
        return [
            a[1] * b[2] - a[2] * b[1],
            a[2] * b[0] - a[0] * b[2],
            a[0] * b[1] - a[1] * b[0]
        ];
    }

    dot(a, b) {
        return a.reduce((sum, val, index) => sum + val * b[index], 0);
    }

    update(position, target, up) {
        this.position = position;
        this.target = target;
        this.up = up;
        this.viewMatrix = this.calculateViewMatrix();
    }
}

export default Camera;