import { Line, Circle } from 'react-konva';
import { usePitchEditor } from '@/hooks/tools/use-pitch-editor';

export const PitchEditor = ({ noteId }) => {
  const { points, handlePointDrag } = usePitchEditor(noteId);

  return (
    <Group>
      <Line 
        points={points}
        stroke="blue"
        tension={0.5}
      />
      {points.map((point, i) => (
        <Circle
          key={i}
          x={point.x}
          y={point.y}
          radius={4}
          fill="white"
          stroke="blue"
          draggable
          onDragMove={handlePointDrag}
        />
      ))}
    </Group>
  );
};