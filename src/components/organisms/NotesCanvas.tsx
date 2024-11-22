import { useAtom } from 'jotai';
import { Group } from 'react-konva';
import { Note } from '../molecules/Note';
import { notesAtom } from '@/stores/pianoRollStore';

const PIXELS_PER_QUARTER = 100;
const NOTE_HEIGHT = 20;

export const NotesCanvas = () => {
  const [notes] = useAtom(notesAtom);
  
  return (
    <Group>
      {notes.map((note) => {
        const noteProps = {
          id: note.id,
          x: note.start * PIXELS_PER_QUARTER,
          y: (127 - note.pitch) * NOTE_HEIGHT,
          width: note.duration * PIXELS_PER_QUARTER,
          height: NOTE_HEIGHT,
          pitch: note.pitch,
        };

        return <Note key={note.id} {...noteProps} />;
      })}
    </Group>
  );
};