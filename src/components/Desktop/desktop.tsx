import Taskbar from '../Taskbar/taskbar';
import Raveform from '../Window/components/Raveform/raveform';
import Window from '../Window/window';
import './desktop.css';

const Desktop = () => {
  return (
    <div className="desktop">
      <Window title='Seeking Aravements' height={800} width={1000} x={300} y={30} content={Raveform}/>
      <Taskbar/>
    </div>
  )
}

export default Desktop;