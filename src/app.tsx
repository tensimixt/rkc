import { ControlPanel } from '@/components/organisms/control-panel';
import { PianoRollCanvas } from '@/components/organisms/PianoRollCanvas';
import { useSetAtom } from 'jotai';
import { notesAtom } from '@/stores/pianoRollStore';
import { useEffect } from 'react';

function App() {
  const setNotes = useSetAtom(notesAtom);

  useEffect(() => {
    setNotes([
      {
        id: "1",
        start: 0,
        duration: 2,
        pitch: 60,
        pitchPoints: [
          { x: 0, y: 0 },
          { x: 1, y: 0 }
        ]
      },
      {
        id: "2",
        start: 2,
        duration: 1,
        pitch: 64,
        pitchPoints: [
          { x: 0, y: 0 },
          { x: 1, y: 0 }
        ]
      }
    ]);
  }, [setNotes]);

  return (
    <div className="flex h-svh items-stretch justify-end">
      <PianoRollCanvas />
      <ControlPanel />
    </div>
  );
}

export default App;