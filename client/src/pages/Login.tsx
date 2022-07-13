import { useForm } from "react-hook-form";
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data:any) => console.log(data);

  return (
    <>
    <Helmet>
      <title>Login | Pretzel Coffee</title>
    </Helmet>
    <div>
      <h1>Login</h1>
      <form className="create" onSubmit={handleSubmit(onSubmit)}> 
        <label>Email:</label>
        <input 
          {...register('email', { required: true })}
          type="email" 
          autoComplete="off"
        />
        {errors.email && <div className="error">Email is required.</div>}

        <label>Password:</label>
        <input 
          {...register('password', { required: true })}
          type="password" 
          autoComplete="off"
        />
        {errors.password && <div className="error">Password is required.</div>}

        <button>Login</button>
      </form>
      <Link to="/signup">
        <button>Create an account</button>
      </Link>
    </div>
    </>
  )
}
