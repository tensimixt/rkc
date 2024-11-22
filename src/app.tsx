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
        duration: 4,
        pitch: 60,
        pitchPoints: [
          { x: 0, y: 0 },
          { x: 1, y: 0 }
        ]
      },
      {
        id: "2",
        start: 4,
        duration: 2,
        pitch: 64,
        pitchPoints: [
          { x: 0, y: 0 },
          { x: 1, y: 0 }
        ]
      },
      {
        id: "3",
        start: 6,
        duration: 2,
        pitch: 67,
        pitchPoints: [
          { x: 0, y: 0 },
          { x: 1, y: 0 }
        ]
      }
    ]);
  }, [setNotes]);

  return (
    <div>
      <PianoRollCanvas />
    </div>
  );
}

export default App;