import { Stage, Layer } from 'react-konva';
import { NotesCanvas } from './NotesCanvas';
import { PitchEditor } from './PitchEditor';
import { useAtom } from 'jotai';
import { selectedNoteAtom } from '@/stores/pianoRollStore';

export const PianoRollCanvas = () => {
  const [selectedNote] = useAtom(selectedNoteAtom);

  return (
    <Stage width={800} height={600}>
      <Layer id="background-layer">
        {/* Add background grid here if needed */}
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