import { useState } from 'react';
import Taskbar from '../Taskbar/taskbar';
import Raveform from '../Window/components/Raveform/raveform';
import Window from '../Window/window';
import poster from '../../assets/form/poster.jpg';
import giveaway from '../../assets/form/giveaway_final.jpg';
import notepad from '../../assets/xp/notepad.png';
import imageIcon from '../../assets/xp/image-icon.png';
import './desktop.css';

const Desktop = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 500);
  return (
    <div className="desktop">
      <Window 
        id='form' 
        title='Seeking Aravements' 
        icon={notepad} 
        height={ mobile ? 'calc(100vh - 30px)' : '90vh'} 
        width={ mobile ? '100vw' : '53vw'} 
        x={mobile ? 0 : 1} 
        y={mobile ? 0 : 3} 
        content={Raveform}/>
      { !mobile && (<Window 
        title='rave_poster.jpg' 
        icon={imageIcon} 
        height='auto' 
        width='30vw' 
        x={55} 
        y={6} 
        content={() => 
          <a href="https://first-avenue.com/event/2023-02-seeking-aravements/" target="_blank" rel="noreferrer noopener">
            <img className='poster' alt="poster for the seeking aravements show" src={poster}/>
          </a>}/>
      )}
      { !mobile && (<Window 
        title='giveaway.jpg' 
        icon={imageIcon} 
        height='auto' 
        width='30vw' 
        x={65} 
        y={12} 
        content={() => 
          <a href="https://first-avenue.com/event/2023-02-seeking-aravements/" target="_blank" rel="noreferrer noopener">
            <img className='poster' alt="flyer for the seeking aravements giveaway" src={giveaway}/>
          </a>}/>
      )}
      <Taskbar/>
    </div>
  )
}

export default Desktop;