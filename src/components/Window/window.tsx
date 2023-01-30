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

  const startX = ((window.innerWidth - props.width)/2);

  const [ref, pressed] = useDraggable({
    onDrag: handleDrag
    },
    { x: startX, y: props.y });

  const initialSize = {
    height: props.height,
    width: props.width,
    transform: `translate(calc((100vw - ${props.width}px)/2), ${props.y}px)`,
  }

  const content = props.content();

  return (
    <div className='window' style={initialSize} ref={ref as any}>
      <Titlebar title={props.title}/>
      <div className='window-content'>
        {content}
      </div>
    </div>
  );
};

export default Window;