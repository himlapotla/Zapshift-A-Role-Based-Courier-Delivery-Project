import React from 'react'
import { useForm } from 'react-hook-form'
import UseAuth from '../../hooks/UseAuth'
import { useLoaderData } from 'react-router'
import riderImg from '../../assets/agent-pending.png'
import useAxiosSecurity from '../../hooks/useAxiosSecurity'
import Swal from 'sweetalert2'

const Rider = () => {

  const { user } = UseAuth()
  const axios = useAxiosSecurity()
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const serviceCenters = useLoaderData()
  const regionsDuplicate = serviceCenters.map(c => c.region)
  // here in the regionsDuplicate variable all the data (named by region from every array) has been stored.
  const regions = [...new Set(regionsDuplicate)]

  const watchRiderRegion = watch('riderRegion')

  const findDistrict = (region) => {
    const regionAllDistricts = serviceCenters.filter(d => d.region === region)
    //  here in regionAllDistricts - all the objects that containing region=that passed value(region), has been stored. Filter only stors those which matchs.
    const allDistricts = regionAllDistricts.map(d => d.district)
    return allDistricts
  }

  const handleRider = (data) => {
    axios.post('/create-rider', data)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            title: 'Your Request has been submitted. Please wait for confirmation.',
            icon: "warning",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "OK"
          })
        }
      })
  }

  return (
    <div>
      <h2> Be a Rider .. . </h2>

      <form className='pb-10 pt-10 text-black' onSubmit={handleSubmit(handleRider)}>

        <div className='flex'>

          <div className='flex-1'>
            <h3 className="font-semibold text-3xl"> Rider Details </h3>

            <label className="label "> Rider Name </label>
            <input defaultValue={user?.displayName} type="text" {...register('riderName')} className="input w-full" />


            <label className="label "> Rider Email </label>
            <input defaultValue={user?.email} type="email" {...register('riderEmail')} className="input w-full" />

            <label className="label "> Rider Phone </label>
            <input type="text" {...register('riderNumber')} className="input w-full" />

            <label className="label "> Rider Nid </label>
            <input type="text" {...register('riderNid')} className="input w-full" />

            <label className="label "> Rider Address </label>
            <input type="text" {...register('riderAddress')} className="input w-full" />

            <label className="label "> Rider Licence </label>
            <input type="text" {...register('riderLicence')} className="input w-full" />

            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Pick A Region </legend>
              <select className="select" {...register('riderRegion')}>
                <option disabled={true}> Pick A Region </option>
                {
                  regions.map((r, i) => <option key={i} value={r}> {r} </option>)
                }
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Pick A District </legend>
              <select className="select" {...register('senderDistrict')}>
                <option disabled={true}> Pick A District </option>
                {
                  findDistrict(watchRiderRegion).map(d => <option> {d} </option>)
                }
              </select>
            </fieldset>

          </div>

          <div className='flex-1 flex justify-center items-center'>
            <img className='border-[#caeb66] border-4 w-3/4 h-3/4 rounded-full' src={riderImg} alt="" />
          </div>

        </div>

        <div className='flex justify-center my-10'>
          <input type="submit" className='btn bg-[#caeb66] w-2/4 ' />
        </div>

      </form>
    </div>
  )
}

export default Rider