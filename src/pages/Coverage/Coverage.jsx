import React, { useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useLoaderData } from 'react-router'

// const MapController = ({ mapRef }) => {
//   const map = useMap()
//   mapRef.current = map
//   return null
// }

const MapController = (prop) => {
  const myDecledUseRef = prop.box
  const wholeMap = useMap()
  myDecledUseRef.current = wholeMap
  return null
}

const Coverage = () => {
  const serviceCenters = useLoaderData()
  const position = [23.6850, 90.3563]
  const mapBox = useRef(null)

  const handlLocation = e => {
    e.preventDefault()
    const loc = e.target.location.value
    const district = serviceCenters.find(c => c.district.toLowerCase().includes(loc.toLowerCase()))

    if (district) {
      const coord = [district.latitude, district.longitude]
      console.log(coord, district);
      mapBox.current.flyTo(coord, 13)
    }
  }

  return (
    <div className='w-8/12 mx-auto mt-4'>

      <div className=''>
        <label> Enter search location </label>
        <form onSubmit={handlLocation}>
          <input type="text" name='location' className='border w-1/3 h-10' />
        </form>
      </div>

      <div className=' border mb-15 mt-5 h-[600px]'>

        <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[600px] '>
          <MapController box={mapBox} />

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {
            serviceCenters.map(center => <Marker
              position={[center.latitude, center.longitude]}>
              <Popup>
                <strong> {center.district} </strong> <br />
                <strong>Service area : {center.covered_area.join(', ')} </strong>
              </Popup>
            </Marker>
            )
          }

        </MapContainer>

      </div>

    </div>
  )
}

export default Coverage