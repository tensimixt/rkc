import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { notesAtom } from '@/stores/pianoRollStore';

interface Position {
  x: number;
  y: number;
}

interface PitchPoint {
  x: number;
  y: number;
}

export const usePianoRollTools = () => {
  const [notes, setNotes] = useAtom(notesAtom);

  const handleNoteCreate = useCallback((pos: Position) => {
    const newNote = {
      id: Date.now().toString(),
      start: pos.x,
      duration: 1,
      pitch: pos.y,
      pitchPoints: []
    };
    setNotes([...notes, newNote]);
  }, [notes, setNotes]);

  const handlePitchEdit = useCallback((noteId: string, points: PitchPoint[]) => {
    setNotes(notes.map(note => 
      note.id === noteId 
        ? { ...note, pitchPoints: points }
        : note
    ));
  }, [notes, setNotes]);

  return {
    handleNoteCreate,
    handlePitchEdit
  };
};