import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../Context/AuthContext/AuthContext'
import useAuth from '../../../hooks/UseAuth'
import { Link } from 'react-router'
import SocialLogin from '../SocialLogin/SocialLogin'
import axios from 'axios'

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { registerUser, updateUserProfile } = useAuth()

    const handleRegistration = (data) => {

        const profileImage = data.photoooo[0]

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user)

                const imageApiUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`
                const formData = new FormData()
                formData.append('image', profileImage)

                axios.post(imageApiUrl, formData)
                    .then(res => {
                        const newProfilePhoto = res.data.data.url
                        console.log(newProfilePhoto);
                        

                        const profile = {
                            displayName: data.name,
                            photoURL: newProfilePhoto
                        }

                        updateUserProfile(profile)
                        .then( () => {
                            console.log('useer profile updated Done..');
                        })
                        .catch( err => console.log(err))

                    })

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

                            <label className="label">Your name</label>
                            <input type="text" {...register('name', { required: true })} className="input" placeholder="your name" />


                            <label className="label">Your Photo</label>
                            <input type="file" {...register('photoooo', { required: true })} className="file-input" placeholder="your photo" />


                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className='text-red-500'> Write Your Email First. </p>}


                            <label className="label">Password</label>
                            <input type="password" {...register('password', { minLength: 6, required: true, pattern: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/ })} className="input" placeholder="Password" />
                            {errors.password?.type === 'required' && <p className='text-red-500'> Give the Password Frst. </p>}
                            {errors.password?.type == 'minLength' && <p className='text-red-500'> Password Must Be 6 Chatacter. </p>}
                            {errors.password?.type == 'pattern' && <p className='text-red-500'> Password Must Contain special Charecter. </p>}

                            <button className="bg-[#caeb66]  border-none btn mt-4"> Rgister </button>
                            <p> Already have an account? <span className='text-blue-400 underline'> <Link to={'/login'}> Login here.. </Link> </span> </p>
                        </fieldset>
                    </form>

                    <SocialLogin> </SocialLogin>

                </div>
            </div>
        </div>
    )
}

export default Register