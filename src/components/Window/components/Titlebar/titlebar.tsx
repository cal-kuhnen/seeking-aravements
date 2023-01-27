import './titlebar.css';

const Titlebar = (props: { title: string }) => {
  return (
    <div className='title-bar'>
      <div className='title'>{props.title}</div>
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