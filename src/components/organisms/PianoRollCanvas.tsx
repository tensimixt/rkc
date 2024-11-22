import { Stage, Layer } from 'react-konva';
import { NotesCanvas } from './NotesCanvas';
import { PitchEditor } from './PitchEditor';
import { useAtom } from 'jotai';
import { selectedNoteAtom } from '@/stores/pianoRollStore';
import { Rect } from 'react-konva';


export const PianoRollCanvas = () => {
  const [selectedNote] = useAtom(selectedNoteAtom);

  return (
    <Stage width={800} height={600}>
      <Layer id="background-layer">
        <Rect
          width={800}
          height={600}
          fill="#f0f0f0"
        />
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