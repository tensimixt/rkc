import { Rect } from 'react-konva';

interface NoteProps {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  pitch: number;
}

export const Note = (props: NoteProps) => {
  return (
    <Rect
      {...props}
      fill="#4A90E2"
      stroke="#2171C7"
      cornerRadius={4}
      draggable
    />
  );
};