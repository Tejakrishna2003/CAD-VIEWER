import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ModelViewer from './components/ModelViewer';
import Controls from './components/Controls';
import './App.css';

const App = () => {
  const [modelUrl, setModelUrl] = useState(null);
  const [model, setModel] = useState(null);

  return (
    <div className="app-container">
      <FileUploader onUpload={setModelUrl} />
      <div className="model-viewer">
        <ModelViewer modelUrl={modelUrl} onModelLoad={setModel} />
      </div>
      <Controls model={model} />
    </div>
  );
};

export default App;