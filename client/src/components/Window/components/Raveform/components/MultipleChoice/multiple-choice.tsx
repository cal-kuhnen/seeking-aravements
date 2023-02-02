import { JsxAttribute } from "typescript";
import { MultipleChoiceModel } from "./multiple-choice.model";

const MultipleChoice = (question: MultipleChoiceModel) => {

  const Values = question.info.values.map(value => {
    return (
      <label key={question.info.id + value}>
        <input
          type="radio"
          className='multiple-choice'
          value={value}
          {...question.register(question.info.id, {
              required: true,
          })}
        />
        {value}
      </label>
    );
  });
  
  return (
    <div className="form-control">
      <label>{question.info.label}</label>
        {Values}
        {question.errors[question.info.id] && question.errors[question.info.id].type === "required" && (
        <p className="errorMsg">This is required.</p>
        )}
    </div>
  )
}

export default MultipleChoice;