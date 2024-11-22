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
  console.log('Rendering Note with props:', props);
  
  return (
    <Rect
      {...props}
      fill="#4287f5"  // bright blue
      stroke="#2563eb" // darker blue
      strokeWidth={2}
      cornerRadius={5}
      opacity={0.8}
    />
  );
};