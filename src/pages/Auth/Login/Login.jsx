import React from 'react'
import { useForm } from 'react-hook-form'
import UseAuth from '../../../hooks/UseAuth'
import { Link } from 'react-router'

const Login = () => {

  const { register, handleSubmit, errors } = useForm()
  const { signInUser } = UseAuth()


  const handleLogin = (data) => {

    signInUser(data.email, data.password)
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        console.log(err);
      }
      )
    }

    return (
      <div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body ">
            <p className='text-4xl font-bold'> Please LogIn.. </p>

            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="fieldset">

                <label className="label">Email</label>
                <input type="email" {...register('email', { required: true, })} className="input" placeholder="Email" />
                {errors?.email.type == "required" && <p className='text-red-500'> Give the Email Frst. </p>}
                {/* llearnt -- optonal chaining error?.*/}

                <label className="label">Password</label>
                <input type="password" {...register('password')} className="input" placeholder="Password" />

                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p> Don't have an account? <span  className='text-blue-400 underline'> <Link to={'/register'}> Register here.. </Link> </span> </p>
              </fieldset>
            </form>

          </div>
        </div>
      </div>
    )
  }

  export default Login