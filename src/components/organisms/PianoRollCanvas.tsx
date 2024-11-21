import { Stage, Layer } from 'react-konva';
import { NotesCanvas } from './NotesCanvas';
import { PitchEditor } from './PitchEditor';
import { useAtom } from 'jotai';
import { selectedNoteAtom } from '@/stores/pianoRollStore';

export const PianoRollCanvas = () => {
  const [selectedNote] = useAtom(selectedNoteAtom);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer id="background-layer">
        {/* Grid lines */}
      </Layer>
      <Layer id="notes-layer">
        <NotesCanvas />
      </Layer>
      <Layer id="pitch-layer">
        {selectedNote && <PitchEditor noteId={selectedNote} />}
      </Layer>
    </Stage>
  );
};