import { useCallback } from 'react';
import { useDraggable } from '../../hooks/useDraggable';
import { Position, WindowInfo } from './window.model';
import Titlebar from './components/Titlebar/titlebar';
import './window.css';

const Window = (props: WindowInfo) => {
  const handleDrag = useCallback(
    (pos: Position) => ({
      x: Math.max(0, pos.x),
      y: Math.max(0, pos.y)
    }),
    []
  );

  const [ref, pressed] = useDraggable({
    onDrag: handleDrag
  });

  const size = {
    height: props.height,
    width: props.width,
  }

  return (
    <div className='window' style={size} ref={ref as any}>
      <Titlebar title={props.title}/>
      <div className='window-content'></div>
    </div>
  );
};

export default Window;