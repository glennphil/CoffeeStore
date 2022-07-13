import { useForm } from "react-hook-form";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { useUsersContext } from '../hooks/useUsersContext';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { dispatch } = useUsersContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    const user = {email, password };
    
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();

    if (response.ok) {
      setEmail('');
      setPassword('');
      dispatch({type: 'CREATE_USER', payload: json});
    }

    const timer = setTimeout(() => {
      console.log('Sign Up Successful');
      navigate('/login');
      window.location.reload();
    }, 500);
    return () => clearTimeout(timer);
  }

  return (
    <>
    <Helmet>
      <title>Sign Up | Pretzel Coffee</title>
    </Helmet>
    <div>
      <h1>Sign Up</h1>
      <form className="create" onSubmit={handleSubmit(onSubmit)}> 
        <label>Email:</label>
        <input 
          {...register('email', { required: true })}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          type="email" 
        />
        {errors.email && <div className="error">Email is required.</div>}

        <label>Password:</label>
        <input 
          name="password"
          {...register('password', { 
            required: true, 
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
          type="password" 
        />
        {errors.password && <div className="error">Password is required.</div>}

        <label>Confirm Password:</label>
        <input 
          name="passwordConfirm"
          {...register('passwordConfirm', { 
            required: true,
            validate: 
              value => value === watch('password') ? true : false,
          })}
          type="password" 
          autoComplete="off"
        />
        {errors.passwordConfirm && <div className="error">Password Confirmation is required.</div>}

        <button>Sign Up</button>
      </form>
    </div>
    </>
  )
}
