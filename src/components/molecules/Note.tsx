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
      fill="blue"
      stroke="darkblue"
      cornerRadius={5}
    />
  );
};