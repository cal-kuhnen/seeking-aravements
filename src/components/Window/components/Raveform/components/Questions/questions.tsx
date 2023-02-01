import { useForm } from 'react-hook-form';
import { form } from '../../../../../../assets/text/strings';
import './questions.css';

const Questions = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
            <p className="errorMsg">Name is required.</p>
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
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Questions;