import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { form } from '../../../../../../assets/text/form';
import { Question } from '../../../../../../models/question.model';
import { postMatchData } from '../../../../../../services/sheets.service';
import MultipleChoice from '../MultipleChoice/multiple-choice';
import Window from '../../../../window';
import favicon from '../../../../../../assets/form/favicon.png'
import './questions.css';

const Questions = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({mode: "onChange"});
  const [formData, setFormData] = useState({} as any);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmit = async (data: any) => {
    setFormData(JSON.stringify(data));
    let cleanedData = {...data, substances: data.substances.toString(), genderPref: data.genderPref.toString()};
    const res = await postMatchData(cleanedData);
    if (res && res.status === 200) {
      setSuccessMessage(true);
    } else if (res && res.status === 500) {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    reset();
  }, [successMessage])

  const generatedQuestions: any = form.questions.map(question => {
    switch (question.type) {
      case 'radio':
        return (
          <MultipleChoice info={question as Question} register={register} errors={errors}/>
        )
      case 'checkbox':
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
              })}
            />
            {errors[question.id] && errors[question.id]?.type === "required" && (
              <p className="errorMsg">This is required.</p>
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
        <div key="boom" className="form-control">
          <label></label>
          <div className='center'>
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </div>
      </form>
      { successMessage && (ReactDOM.createPortal(
              <Window 
                id="success"
                title="Success!"
                icon={favicon}
                height="15vh"
                width="15vw"
                x={45}
                y={45}
                z={3}
                content={() => 
                  <div className='message'>
                    <div>Your answers have been recorded.</div>
                    <div className='center'>
                      <button className='submit-button modal-button' onClick={() => setSuccessMessage(false)}>Ok</button>
                    </div>
                  </div>
                }
              />,
              document.getElementById('desktop')!
      ))}
      { errorMessage && (ReactDOM.createPortal(
              <Window 
                id="error"
                title="Error"
                icon={favicon}
                height="15vh"
                width="15vw"
                x={45}
                y={45}
                z={3}
                content={() => 
                  <div className='message'>
                    <div>There was an error processing your request.</div>
                    <button className='submit-button modal-button' onClick={() => setErrorMessage(false)}>Ok</button>
                  </div>
                }
              />,
              document.getElementById('desktop')!
      ))}
    </div>
  )
}

export default Questions;