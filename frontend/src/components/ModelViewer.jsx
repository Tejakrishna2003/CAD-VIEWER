import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ModelViewer = ({ modelUrl, onModelLoad }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    if (!modelUrl) return;

    const loader = modelUrl.endsWith('.stl') ? new STLLoader() : new OBJLoader();
    loader.load(
      modelUrl,
      (geometry) => {
        if (geometry) {
          setModel(geometry);
          onModelLoad(geometry); 
        } else {
          console.error('Failed to load model: Invalid geometry');
        }
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );
  }, [modelUrl, onModelLoad]);

  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {model && (
        <mesh geometry={model}>
          <meshStandardMaterial color="orange" />
        </mesh>
      )}
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;