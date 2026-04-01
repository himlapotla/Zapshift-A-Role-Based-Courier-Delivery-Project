import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../Context/AuthContext/AuthContext'
import useAuth from '../../../hooks/UseAuth'
import { Link } from 'react-router'

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { registerUser } = useAuth()

    const handleRegistration = (data) => {
        console.log('after register..', data);
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body ">
                    <p className='text-4xl font-bold'> Please Register.. </p>
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className='text-red-500'> Write Your Email First. </p>}


                            <label className="label">Password</label>
                            <input type="password" {...register('password', { minLength: 6, required: true, pattern: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/ })} className="input" placeholder="Password" />
                            {errors.password?.type === 'required' && <p className='text-red-500'> Give the Password Frst. </p>}
                            {errors.password?.type == 'minLength' && <p className='text-red-500'> Password Must Be 6 Chatacter. </p>}
                            {errors.password?.type == 'pattern' && <p className='text-red-500'> Password Must Contain special Charecter. </p>}

                            <button className="btn btn-neutral mt-4"> Rgister </button>
                            <p> Already have an account? <span  className='text-blue-400 underline'> <Link to={'/login'}> Login here.. </Link> </span> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register