import React from 'react';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter';
import { Mesh } from 'three';

const Controls = ({ model }) => {
  const handleExportSTL = () => {
    if (!model) {
      alert('No model to export.');
      return;
    }

    
    const mesh = new Mesh(model);

    
    const exporter = new STLExporter();
    const stlData = exporter.parse(mesh);

    
    const blob = new Blob([stlData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'model.stl'; 
    link.click();
    URL.revokeObjectURL(url); 
  };

  return (
    <div className="controls">
      <button>Rotate</button>
      <button>Zoom</button>
      <button>Pan</button>
      <button onClick={handleExportSTL}>Export as STL</button>
    </div>
  );
};

export default Controls;