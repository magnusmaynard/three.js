// Assuming the structure of the WebGLCameraArrayExample.js file
import * as THREE from 'three';

// Other necessary imports and setup code

function init() {
    // Scene setup and camera configurations

    // Geometry for the cylinders
    const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 20, 32);

    // Material for the cylinders, changing the color to red
    const material = new THREE.MeshPhongMaterial({color: 0xff0000});

    // If cylinders are created in a loop
    for (let i = 0; i < numberOfCylinders; i++) {
        // Create a new mesh for each cylinder with the modified material
        const cylinder = new THREE.Mesh(cylinderGeometry, material);

        // Positioning and adding the cylinder to the scene
        cylinder.position.set(i * spacing, 0, 0);
        scene.add(cylinder);
    }

    // Additional code for rendering and animation loop
}

// Call init to set up the scene
init();
