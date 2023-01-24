import Taskbar from '../Taskbar/taskbar';
import Window from '../Window/window';
import './desktop.css';

const Desktop = () => {
  return (
    <div className="desktop">
      <Window/>
      <Window/>
      <Taskbar/>
    </div>
  )
}

export default Desktop;