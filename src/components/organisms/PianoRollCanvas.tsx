import { Stage, Layer } from 'react-konva';
import { NotesCanvas } from './NotesCanvas';
import { PitchEditor } from './PitchEditor';

export const PianoRollCanvas = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer id="background-layer">
        {/* Grid lines */}
      </Layer>
      <Layer id="notes-layer">
        <NotesCanvas />
      </Layer>
      <Layer id="pitch-layer">
        <PitchEditor />
      </Layer>
    </Stage>
  );
};