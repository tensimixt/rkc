import { Line, Circle, Group } from 'react-konva';
import { usePitchEditor } from '@/hooks/tools/use-pitch-editor';

interface PitchEditorProps {
  noteId: string;
}

interface Point {
  x: number;
  y: number;
}

export const PitchEditor = ({ noteId }: PitchEditorProps) => {
  const { points, handlePointDrag } = usePitchEditor(noteId);

  // Convert Point[] to number[] for the Line component
  const flattenedPoints = points.reduce<number[]>((acc, point) => {
    acc.push(point.x, point.y);
    return acc;
  }, []);

  return (
    <Group>
      <Line 
        points={flattenedPoints}
        stroke="blue"
        tension={0.5}
      />
      {points.map((point: Point, i: number) => (
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