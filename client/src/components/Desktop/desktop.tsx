import { url } from 'inspector';
import Taskbar from '../Taskbar/taskbar';
import Raveform from '../Window/components/Raveform/raveform';
import Window from '../Window/window';
import poster from '../../assets/form/poster.jpg';
import giveaway from '../../assets/form/giveaway_final.jpg';
import notepad from '../../assets/xp/notepad.png';
import imageIcon from '../../assets/xp/image-icon.png';
import './desktop.css';

const Desktop = () => {
  return (
    <div className="desktop">
      <Window title='Seeking Aravements' icon={notepad} height='90vh' width='53vw' x={1} y={3} content={Raveform}/>
      <Window title='rave_poster.jpg' icon={imageIcon} height='auto' width='30vw' x={55} y={6} content={() => <img className='poster' src={poster}></img>}/>
      <Window title='giveaway.jpg' icon={imageIcon} height='auto' width='30vw' x={65} y={12} content={() => <img className='poster' src={giveaway}></img>}/>
      <Taskbar/>
    </div>
  )
}

export default Desktop;