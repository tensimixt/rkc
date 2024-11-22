import { ControlPanel } from '@/components/organisms/control-panel';
import { PianoRollCanvas } from '@/components/organisms/PianoRollCanvas';
import { useSetAtom } from 'jotai';
import { notesAtom } from '@/stores/pianoRollStore';
import { useEffect } from 'react';

function App() {
  const setNotes = useSetAtom(notesAtom);

  useEffect(() => {
    const initialNotes = [
      {
        id: "1",
        start: 0,
        duration: 4,
        pitch: 60,
        pitchPoints: [
          { x: 0, y: 0 },
          { x: 1, y: 0 }
        ]
      }
    ];
    console.log('Setting initial notes:', initialNotes);
    setNotes(initialNotes);
  }, [setNotes]);

  return (
    <div className="flex h-svh items-stretch">
      <PianoRollCanvas />
      <ControlPanel />
    </div>
  );
}

export default App;