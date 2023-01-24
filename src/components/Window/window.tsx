import { LegacyRef, useCallback } from 'react';
import { useDraggable } from '../../hooks/useDraggable';
import { Position } from './window.model';
import './window.css';

const Window = () => {
  const handleDrag = useCallback(
    ({ x, y }: Position) => ({
      x: Math.max(0, x),
      y: Math.max(0, y)
    }),
    []
  );

  const [ref, pressed] = useDraggable({
    onDrag: handleDrag
  });

  return (
    <div className='window' ref={ref as any}>
      <div className='title-bar'>Window</div>
      <div className='window-content'></div>
    </div>
  );
};

export default Window;