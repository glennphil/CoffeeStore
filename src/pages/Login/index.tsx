import Header from "../../components/Header";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit:any = (data:string) => console.log(data);
  return (
    <section>

      <Header />
      <section className="signin-container">
        <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
          <input
            {...register('firstName')} 
            placeholder="Enter email"
            autoComplete="off"
          />
          <input
            {...register('lastName')}
            placeholder="Enter password"
            autoComplete="off"
           />
        </form>

        

      <button className="signup-button">
      <Link to="/signup" >Sign Up</Link>
      </button>
      </section>
      

    </section>
  );
}
