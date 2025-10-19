# 3D Three-Body Simulator

This project is a 3D simulation of the three-body problem, showcasing the gravitational interactions between three celestial bodies. It is built using TypeScript and WebGL for rendering.

## Features

- Realistic simulation of three-body dynamics
- Interactive 3D visualization
- User controls for manipulating the simulation
- HUD for displaying simulation status

## Project Structure

```
3d-three-body-simulator
├── src
│   ├── main.ts               # Entry point for the application
│   ├── renderer              # Contains rendering logic
│   │   ├── scene.ts          # Manages the 3D scene
│   │   ├── camera.ts         # Controls the camera
│   │   └── shaders           # Contains shader files
│   │       └── phong.glsl    # Phong shading shader
│   ├── simulation            # Contains simulation logic
│   │   ├── integrator.ts     # Numerical integration for the simulation
│   │   ├── bodies.ts         # Defines properties of the bodies
│   │   └── forces.ts         # Calculates forces between bodies
│   ├── ui                    # Contains user interface logic
│   │   ├── controls.ts       # Handles user input
│   │   └── hud.ts            # Manages the HUD display
│   └── utils                 # Utility functions
│       └── math.ts           # Math-related utilities
├── public
│   └── index.html            # HTML template for the application
├── tests                     # Contains unit tests
│   ├── integrator.test.ts    # Tests for integrator.ts
│   └── bodies.test.ts        # Tests for bodies.ts
├── package.json              # NPM configuration file
├── tsconfig.json             # TypeScript configuration file
├── .gitignore                # Git ignore file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd 3d-three-body-simulator
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm start
   ```

## Usage

Open your browser and navigate to `http://localhost:3000` to view the simulation. Use the controls to manipulate the view and observe the interactions between the bodies.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.