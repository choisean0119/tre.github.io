export function addVectors(v1: number[], v2: number[]): number[] {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
}

export function subtractVectors(v1: number[], v2: number[]): number[] {
    return [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]];
}

export function dotProduct(v1: number[], v2: number[]): number {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

export function crossProduct(v1: number[], v2: number[]): number[] {
    return [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0],
    ];
}

export function magnitude(v: number[]): number {
    return Math.sqrt(dotProduct(v, v));
}

export function normalize(v: number[]): number[] {
    const mag = magnitude(v);
    return mag > 0 ? [v[0] / mag, v[1] / mag, v[2] / mag] : [0, 0, 0];
}