import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { form } from '../../../../../../assets/text/form';
import { Question } from '../../../../../../models/question.model';
import { postMatchData } from '../../../../../../services/sheets.service';
import MultipleChoice from '../MultipleChoice/multiple-choice';
import './questions.css';

const Questions = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: "onChange"});
  const [data, setData] = useState('');

  const onSubmit = (data: any) => {
    setData(JSON.stringify(data));
    console.log(data);
    postMatchData(data);
  };

  const generatedQuestions: any = form.questions.map(question => {
    switch (question.type) {
      case 'radio':
        return (
          <MultipleChoice info={question as Question} register={register} errors={errors}/>
        )
      case 'text':
        return (
          <div key={question.id} className="form-control">
            <label>{question.label}</label>
            <input
              type="text"
              className='single-line-text'
              {...register(question.id, {
                required: true,
              })}
            />
            {errors[question.id] && errors[question.id]?.type === "required" && (
              <p className="errorMsg">This is required.</p>
            )}
          </div>
        )
      case 'text-height':
        return (
          <div key={question.id} className="form-control">
            <label>{question.label}</label>
            <input
              type="text"
              className='single-line-text'
              placeholder="ex. 5'8&quot;"
              {...register(question.id, {
                required: true,
                pattern: /^[3-7]'(?:\s*(?:1[01]|[0-9])(''|"))?$/,
              })}
            />
            {errors[question.id] && errors[question.id]?.type === "required" && (
              <p className="errorMsg">This is required.</p>
            )}
            {errors[question.id] && errors[question.id]?.type === "pattern" && (
              <p className="errorMsg">Height is not valid.</p>
            )}
          </div>
        )
      case 'text-age':
        return (
          <div key={question.id} className="form-control">
            <label>{question.label}</label>
            <input
              type="number"
              className='single-line-text'
              {...register(question.id, {
                required: true,
                min: 18,
              })}
            />
            {errors[question.id] && errors[question.id]?.type === "required" && (
              <p className="errorMsg">This is required.</p>
            )}
            {errors[question.id] && errors[question.id]?.type === "min" && (
              <p className="errorMsg">Get outta here!</p>
            )}
        </div>
        )
      case 'text-email':
        return (
          <div key={question.id} className="form-control">
            <label>{question.label}</label>
            <input
              type="text"
              className='single-line-text'
              {...register(question.id, {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
              })}
            />
            {errors[question.id] && errors[question.id]?.type === "required" && (
              <p className="errorMsg">This is required.</p>
            )}
            {errors[question.id] && errors[question.id]?.type === "pattern" && (
              <p className="errorMsg">Email is not valid.</p>
            )}
        </div>
        )
      case 'text-area':
        return (
          <div key={question.id} className="form-control">
            <label>{question.label}</label>
            <textarea
              {...register(question.id, {
                required: true,
              })}
            />
            {errors[question.id] && errors[question.id]?.type === "required" && (
              <p className="errorMsg">This is required.</p>
            )}
          </div>
        )
    }
  });

  return (
    <div className="questions">
      <form onSubmit={handleSubmit(onSubmit)}>
        {generatedQuestions}
        <div className="form-control">
          <label></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Questions;