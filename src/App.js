import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[10, 0, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </header>
    </div>
  );
}

export default App;
