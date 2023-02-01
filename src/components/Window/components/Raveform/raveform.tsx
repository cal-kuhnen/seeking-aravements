import { SHEET_ID } from '../../../../constants/sheet';
import Questions from './components/Questions/questions';
import { form } from '../../../../assets/text/strings';
// import handler from '../../../../services/sheets.service';
import './raveform.css';

const Raveform = () => {

  // const handleSubmit = () => {
  //   handler(SHEET_ID);
  // }
  return (
    <div className="rave-form">
      <div className='rave-margin'></div>
      <div className='rave-content'>
        <div className='form-title shadow'>
          {form.title}
        </div>
        <div className='form-description shadow'>
          {form.description}
        </div>
        <Questions/>
      </div>
      <div className='rave-margin'></div>
    </div>
  )
}

export default Raveform;