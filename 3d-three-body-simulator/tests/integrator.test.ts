import { Integrator } from '../src/simulation/integrator';

describe('Integrator', () => {
    let integrator: Integrator;

    beforeEach(() => {
        integrator = new Integrator();
    });

    test('should initialize with default values', () => {
        expect(integrator).toBeDefined();
        expect(integrator.timeStep).toBe(0.01); // assuming default time step
    });

    test('should calculate positions correctly', () => {
        const initialPositions = [
            { x: 1, y: 0, z: 0 },
            { x: -1, y: 0, z: 0 },
            { x: 0, y: 1, z: 0 }
        ];
        const initialVelocities = [
            { x: 0, y: 1, z: 0 },
            { x: 0, y: -1, z: 0 },
            { x: 1, y: 0, z: 0 }
        ];

        integrator.setInitialConditions(initialPositions, initialVelocities);
        integrator.step(); // perform one integration step

        const positions = integrator.getPositions();
        expect(positions).toHaveLength(3);
        // Add more specific assertions based on expected positions after one step
    });

    test('should handle edge cases', () => {
        // Test with edge cases, such as zero mass or extreme positions
        integrator.setInitialConditions([], []);
        expect(() => integrator.step()).not.toThrow();
    });
});