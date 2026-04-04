import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import UseAuth from '../../../hooks/UseAuth'
import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import SocialLogin from '../SocialLogin/SocialLogin'

const Login = () => {

  const [firebaseErr, setFirebaseErr] = useState(null)

  const { register, handleSubmit, errors } = useForm()
  const { signInUser } = UseAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (data) => {

    signInUser(data.email, data.password)
      .then(res => {
        console.log(res.user);
        navigate(location.state || '/')
      })
      .catch(err => {
        if (err) {
          setFirebaseErr(err)
        }
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

              {
                firebaseErr &&
                <p className='text-red-500'> Please put the login credential properly </p>
              }

              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="bg-[#caeb66]  border-none btn mt-4"> Login </button>
              <p> Don't have an account? <span className='text-blue-400 underline'>
                <Link state={location.state} to={'/register'}> Register here.. </Link> </span> </p>
            </fieldset>
          </form>

          <SocialLogin> </SocialLogin>

        </div>
      </div>
    </div>
  )
}

export default Login