import { Body } from '../src/simulation/bodies';

describe('Body Class', () => {
    let body: Body;

    beforeEach(() => {
        body = new Body(5.0, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 });
    });

    test('should initialize with correct mass', () => {
        expect(body.mass).toBe(5.0);
    });

    test('should initialize with correct position', () => {
        expect(body.position).toEqual({ x: 0, y: 0, z: 0 });
    });

    test('should initialize with correct velocity', () => {
        expect(body.velocity).toEqual({ x: 1, y: 1, z: 1 });
    });

    test('should update position correctly', () => {
        body.updatePosition(1.0); // Assuming updatePosition takes a time delta
        expect(body.position).toEqual({ x: 1, y: 1, z: 1 }); // Adjust based on velocity and time
    });

    test('should apply force correctly', () => {
        body.applyForce({ x: 0, y: 10, z: 0 });
        expect(body.velocity).toEqual({ x: 1, y: 2, z: 1 }); // Adjust based on force and mass
    });
});