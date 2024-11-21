import { useAtom } from 'jotai';
import { Group } from 'react-konva';
import { Note } from '../molecules/Note';
import { notesAtom } from '@/stores/pianoRollStore';

const PIXELS_PER_QUARTER = 100; // Adjust this value based on your zoom level
const NOTE_HEIGHT = 20; // Height of each note in pixels

export const NotesCanvas = () => {
  const [notes] = useAtom(notesAtom);
  
  return (
    <Group>
      {notes.map((note) => {
        // Convert timeline properties to pixel values
        const noteProps = {
          id: note.id,
          x: note.start * PIXELS_PER_QUARTER, // Convert start time to x position
          y: (127 - note.pitch) * NOTE_HEIGHT, // Convert pitch to y position
          width: note.duration * PIXELS_PER_QUARTER, // Convert duration to width
          height: NOTE_HEIGHT,
          pitch: note.pitch,
        };

        return <Note key={note.id} {...noteProps} />;
      })}
    </Group>
  );
};