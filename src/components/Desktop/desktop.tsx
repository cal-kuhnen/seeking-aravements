import Taskbar from '../Taskbar/taskbar';
import Window from '../Window/window';
import './desktop.css';

const Desktop = () => {
  return (
    <div className="desktop">
      <Window title='Find Ya Rave Partna' height={200} width={200}/>
      <Window title='Minesweeper' height={300} width={150}/>
      <Taskbar/>
    </div>
  )
}

export default Desktop;