import { useState, useCallback } from 'react';
import Konva from 'konva';

interface Point {
  x: number;
  y: number;
}

export const usePitchEditor = (noteId: string) => {
  // Initialize points with a default value using noteId
  const [points, setPoints] = useState<Point[]>(() => {
    // You can use noteId here to fetch initial points if needed
    return [{ x: 0, y: 0 }];
  });

  const handlePointDrag = useCallback((e: Konva.KonvaEventObject<DragEvent>) => {
    const index = Number(e.target.index);
    const newPoints = [...points];
    newPoints[index] = {
      x: e.target.x(),
      y: e.target.y()
    };
    setPoints(newPoints);
  }, [points]);

  return { points, handlePointDrag };
};