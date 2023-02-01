import { url } from 'inspector';
import Taskbar from '../Taskbar/taskbar';
import Raveform from '../Window/components/Raveform/raveform';
import Window from '../Window/window';
import poster from '../../assets/form/poster.jpg';
import notepad from '../../assets/xp/notepad.png';
import imageIcon from '../../assets/xp/image-icon.png';
import './desktop.css';

const Desktop = () => {
  return (
    <div className="desktop">
      <Window title='Seeking Aravements' icon={imageIcon} height={800} width={1000} x={100} y={30} content={Raveform}/>
      <Window title='rave_poster.jpg' icon={notepad} height={672} width={540} x={1200} y={70} content={() => <img className='poster' src={poster}></img>}/>
      <Taskbar/>
    </div>
  )
}

export default Desktop;