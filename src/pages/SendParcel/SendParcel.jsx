import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData } from 'react-router'

const SendParcel = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const serviceCenters = useLoaderData()
    const regionsDuplicate = serviceCenters.map(c => c.region)
    const regions = [...new Set(regionsDuplicate)]

    const senderRegion = watch('senderRegion')
    const receiverRegion = watch('receiverRegion')

    const findDistrict = (region) => {
        const regionAllDistricts = serviceCenters.filter(d => d.region === region)
        const allDistricts = regionAllDistricts.map(d => d.district)
        return allDistricts
    }

    const handleSendParcel = (data) => {

        let cost = 0
        let isSameDistrict = false
        let extraWeight = data.parcelWeight - 3

        if (data.reciverDistrict === data.senderDistrict) {
            isSameDistrict = true
        }

        if (data.parcelType === 'document' && isSameDistrict == true) {
            cost = 60
        }
        else {
            cost = 80
        }

        if (data.parcelType === 'non-document') {
            if (data.parcelWeight <= 3 && isSameDistrict == true) {
                cost = 110
            }
            else {
                cost = 150
            }

        }

        if (data.parcelType === 'non-document' && data.parcelWeight > 3) {
            if (isSameDistrict == true) {
                cost = extraWeight * 40 + 110
            }
            else {
                cost = extraWeight * 40 + 150
            }
        }



        console.log(data)
        console.log(isSameDistrict)
        console.log('cost--', cost)
        console.log(extraWeight)

    }

    return (
        <div>

            <h2 className='text-4xl font-bold'> Send A Parcel </h2>

            <form className='pb-10 text-black' onSubmit={handleSubmit(handleSendParcel)}>

                <div className='mt-9 mb-7 '>
                    <label className="label mr-6">
                        <input type="radio" {...register('parcelType')} value="document" className="radio  radio-success" defaultChecked />
                        Document</label>

                    <label className="label">
                        <input type="radio" {...register('parcelType')} value="non-document" className="radio radio-success" />
                        Non-Document</label>
                </div>

                <div className='flex gap-3'>

                    <div className='flex-1 '>
                        <label className="label "> Parcel Name </label>
                        <input type="text" {...register('parcelName')} className="input w-full" />
                    </div>

                    <div className='flex-1'>
                        <label className="label "> Parcel Weignt (in kg) </label>
                        <input type="number" {...register('parcelWeight')} className="input w-full" />
                    </div>

                </div>

                <div className='flex pt-10 gap-3'>

                    <div className='flex-1'>
                        <h3 className="font-semibold text-3xl"> Sender Details </h3>

                        <label className="label "> Sender Name </label>
                        <input type="text" {...register('senderName')} className="input w-full" />

                        <label className="label "> Sender Email </label>
                        <input type="email" {...register('senderEmail')} className="input w-full" />

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend"> Pick A Region </legend>
                            <select className="select" {...register('senderRegion')}>
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
                                    findDistrict(senderRegion).map(d => <option> {d} </option>)
                                }
                            </select>
                        </fieldset>

                        <label className="label "> Sender Address </label>
                        <input type="text" {...register('senderAddress')} className="input w-full" />

                    </div>

                    <div className='flex-1'>
                        <h3 className="font-semibold text-3xl"> Receiver Details </h3>

                        <label className="label "> Receiver Name </label>
                        <input type="text" {...register('receiverName')} className="input w-full" />

                        <label className="label "> Receiver Email </label>
                        <input type="email" {...register('receiverEmail')} className="input w-full" />

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend"> Pick A Region </legend>
                            <select className="select" {...register('receiverRegion')}>
                                <option disabled={true}> Pick A Region </option>
                                {
                                    regions.map((r, i) => <option key={i} value={r}> {r} </option>)
                                }
                            </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend"> Pick A District </legend>
                            <select className="select" {...register('reciverDistrict')}>
                                <option disabled={true}> Pick A District </option>
                                {
                                    findDistrict(receiverRegion).map(d => <option> {d} </option>)
                                }
                            </select>
                        </fieldset>

                        <label className="label "> Receiver adress </label>
                        <input type="text" {...register('receiverAddress')} className="input w-full" />

                    </div>

                </div>

                <div className='flex justify-center my-10'>
                    <input type="submit" className='btn bg-[#caeb66] w-2/4 ' />
                </div>
            </form>

        </div>
    )
}

export default SendParcel