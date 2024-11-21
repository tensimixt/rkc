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
  
  export enum PianoRollTool {
    SELECT = 'select',
    DRAW = 'draw',
    PITCH = 'pitch',
    ERASE = 'erase'
  }