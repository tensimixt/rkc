import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { notesAtom } from '@/stores/pianoRollStore';

export const usePianoRollTools = () => {
  const [notes, setNotes] = useAtom(notesAtom);

  const handleNoteCreate = useCallback((pos) => {
    // Create new note logic
  }, []);

  const handlePitchEdit = useCallback((noteId, points) => {
    // Update pitch points logic
  }, []);

  return {
    handleNoteCreate,
    handlePitchEdit
  };
};