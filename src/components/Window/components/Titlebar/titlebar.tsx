import { TitleBar } from '../../window.model';
import './titlebar.css';

const Titlebar = (props: TitleBar) => {
  return (
    <div className='title-bar'>
      <div className='header'>
        <img className='icon' src={props.icon}></img>
        <div className='title'>{props.title}</div>
      </div>
      <div className='window-buttons'>
        <div className='window-button blue-button'>
          <div className='minimize-icon'></div>
        </div>
        <div className='window-button blue-button'>
          <div className='maximize-icon'></div>
        </div>
        <div className='window-button close'>
          <div className='close-icon'>✕</div>
        </div>
      </div>
    </div>
  )
}

export default Titlebar;