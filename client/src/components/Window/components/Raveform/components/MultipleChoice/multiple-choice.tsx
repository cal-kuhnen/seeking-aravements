import { MultipleChoiceModel } from "../../../../../../models/question.model";
import { common } from "../../../../../../assets/text/strings";
import './multiple-choice.css';
import { useState } from "react";

const MultipleChoice = (question: MultipleChoiceModel) => {
  const [radioText, setRadioText] = useState('');
  const [otherSelected, setOtherSelected] = useState(false);

  // call click event on label to force the value to update, best I've got right now
  const handleBlur = (e: any) => {
    setRadioText(e.target.value);
    const element = document.getElementById('moronic');
    element?.click();
  }

  const Values = question.info.values?.map(value => {
    if (question.info.type === 'checkbox') {
      return (
        <label key={question.info.id + value} className='multiple-choice'>
          <input
            type="checkbox"
            value={value}
            {...question.register(question.info.id, {
                required: true,
            })}
          />
          {value}
        </label>
      );
    } else if (value === common.other) {
      return (
        <label id="moronic" key={question.info.id + value} className='multiple-choice'>
          <input
            type="radio"
            value={radioText}
            {...question.register(question.info.id, {
                required: true,
                onChange: (e) => {
                  if (e.target.value === radioText) {
                    setOtherSelected(true);
                  } else {
                    setOtherSelected(false);
                  }
                },
            })}
          />
          {common.other}
          <input
            type="text"
            className='single-line-text'
            disabled={!otherSelected}
            onBlur={(e) => handleBlur(e)}
          />
        </label>
      );
    } else {
      return (
        <label key={question.info.id + value} className='multiple-choice'>
          <input
            type="radio"
            value={value}
            {...question.register(question.info.id, {
                required: true,
            })}
          />
          {value}
        </label>
      );
    }
  });
  
  return (
    <div className="form-control">
      <label>{question.info.label}</label>
        {Values}
        {question.errors[question.info.id] && question.errors[question.info.id]?.type === "required" && (
        <p className="errorMsg">This is required.</p>
        )}
    </div>
  )
}

export default MultipleChoice;