import { ControlPanel } from '@/components/organisms/control-panel';
import { PianoRollCanvas } from '@/components/organisms/PianoRollCanvas';

function App() {
  return (
    <div className="flex h-svh items-stretch justify-end">
      <PianoRollCanvas />
      <ControlPanel />
    </div>
  );
}

export default App;