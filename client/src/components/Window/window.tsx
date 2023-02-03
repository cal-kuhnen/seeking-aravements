import { useCallback } from 'react';
import { useDraggable } from '../../hooks/useDraggable';
import { Position, WindowInfo } from '../../models/window.model';
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
    },
    { x: props.x, y: props.y });

  const initialSize = {
    height: props.height,
    width: props.width,
    transform: `translate(${props.x}px, ${props.y}px)`,
  }

  const content = props.content();

  return (
    <div key={props.title} className='window' style={initialSize} ref={ref as any}>
      <Titlebar title={props.title} icon={props.icon}/>
      <div className='window-content'>
        {content}
      </div>
    </div>
  );
};

export default Window;