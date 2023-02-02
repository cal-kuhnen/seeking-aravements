import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { form } from '../../../../../../assets/text/form';
import { postMatchData } from '../../../../../../services/sheets.service';
import MultipleChoice from '../MultipleChoice/multiple-choice';
import './questions.css';

const Questions = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: "onBlur"});
  const [data, setData] = useState('');

  const onSubmit = (data: any) => {
    setData(JSON.stringify(data));
    console.log(data);
    postMatchData(data);
  };

  return (
    <div className="questions">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>{form.questions.name}</label>
          <input
            type="text"
            className='single-line-text'
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <p className="errorMsg">This is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>{form.questions.age}</label>
          <input
            type="number"
            className='single-line-text'
            {...register("age", {
              required: true,
              min: 18,
            })}
          />
          {errors.age && errors.age.type === "required" && (
            <p className="errorMsg">This is required.</p>
          )}
          {errors.age && errors.age.type === "min" && (
            <p className="errorMsg">Get outta here!</p>
          )}
        </div>
        <div className="form-control">
          <label>{form.questions.height}</label>
          <input
            type="text"
            className='single-line-text'
            placeholder="ex. 5'8&quot;"
            {...register("height", {
              required: true,
              pattern: /^[3-7]'(?:\s*(?:1[01]|[0-9])(''|"))?$/,
            })}
          />
          {errors.height && errors.height.type === "required" && (
            <p className="errorMsg">This is required.</p>
          )}
          {errors.height && errors.height.type === "pattern" && (
            <p className="errorMsg">Height is not valid.</p>
          )}
        </div>
        <div className="form-control">
          <label>{form.questions.email}</label>
          <input
            type="text"
            className='single-line-text'
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">This is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        <MultipleChoice info={form.questions.attendance} register={register} errors={errors}/>
        <MultipleChoice info={form.questions.genderIdentity} register={register} errors={errors}/>
        <div className="form-control">
          <label></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Questions;