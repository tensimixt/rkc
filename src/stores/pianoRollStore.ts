import { atom } from 'jotai';

export interface Note {
  id: string;
  start: number;
  duration: number;
  pitch: number;
  pitchPoints: PitchPoint[];
}

export interface PitchPoint {
  x: number;
  y: number;
  value: number;
}

export const notesAtom = atom<Note[]>([]);
export const selectedNoteAtom = atom<string | null>(null);
export const pitchPointsAtom = atom<PitchPoint[]>([]);