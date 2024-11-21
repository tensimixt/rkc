import { useAtom } from 'jotai';
import { Group } from 'react-konva';
import { Note } from '../molecules/Note';
import { notesAtom } from '@/stores/pianoRollStore';

export const NotesCanvas = () => {
  const [notes] = useAtom(notesAtom);
  
  return (
    <Group>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </Group>
  );
};