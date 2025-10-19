class Forces {
    static gravitationalForce(m1: number, m2: number, r: number): number {
        const G = 6.67430e-11; // Gravitational constant
        return G * (m1 * m2) / (r * r);
    }

    static applyGravity(body1: any, body2: any): void {
        const distance = this.distance(body1.position, body2.position);
        const forceMagnitude = this.gravitationalForce(body1.mass, body2.mass, distance);
        const forceDirection = this.normalize(this.subtract(body2.position, body1.position));
        
        body1.applyForce(this.scale(forceDirection, forceMagnitude));
        body2.applyForce(this.scale(this.negate(forceDirection), forceMagnitude));
    }

    static distance(pos1: number[], pos2: number[]): number {
        return Math.sqrt(Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2) + Math.pow(pos2[2] - pos1[2], 2));
    }

    static normalize(vector: number[]): number[] {
        const length = Math.sqrt(vector.reduce((sum, comp) => sum + comp * comp, 0));
        return vector.map(comp => comp / length);
    }

    static subtract(vecA: number[], vecB: number[]): number[] {
        return vecA.map((comp, index) => comp - vecB[index]);
    }

    static scale(vector: number[], scalar: number): number[] {
        return vector.map(comp => comp * scalar);
    }

    static negate(vector: number[]): number[] {
        return vector.map(comp => -comp);
    }
}