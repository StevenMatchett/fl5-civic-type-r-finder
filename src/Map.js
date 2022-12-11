import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import cars from './cars';


const containerStyle = {
  width: `100%`,
  height: `1000px`
};

const center = {
  lat: 39,
  lng: -98
};



export const Map = (props) => {
  let [currentCars, setCurrentCars] = React.useState(cars);
  const { atTransit, atDealer, colors, setData, twoPlus } = props



  const colorsLowerCase = {}
  colors.forEach(color => {
    colorsLowerCase[color.name.toLowerCase()] = true;
  })


  useEffect(() => {
    let dedupe = {}


    const resCarMap = {}
    const addCarToMap = (car) => {
      const key = car.name + car.phone
      console.log('here')
      if (!resCarMap[key]) {
        resCarMap[key] = {location:car.location, cars:[car]}
      } else {
        resCarMap[key].cars.push(car)
      }
    }
    cars.forEach(car => {
      if (!colorsLowerCase[car.color.toLowerCase()]) {
        return false;
      }
      if (dedupe[car.vin+ car.phone]) {
        return false
      }
      dedupe[car.vin+car.phone] = true;

      if (atDealer && atTransit) return addCarToMap(car);

      if (atDealer && car.atDealer) {
        return addCarToMap(car)
      }
      if (atTransit && !car.atDealer) {
        return addCarToMap(car)
      }

      return false;

    })
    // console.log(resCarMap)
    let resCars = Object.keys(resCarMap).map(key => {
      return resCarMap[key]
    })
    if (twoPlus) {
      resCars = resCars.filter(car => car.cars.length > 1)
    }
    // console.log(resCars)
    setCurrentCars(resCars)
  }, [atTransit, atDealer,twoPlus, colors.length]);
  
  console.log(currentCars.length)


  const options = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyA4osQxlfnZEX-CUfopRAxP31PckDPX8vw">
      {currentCars ?
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
        >
          <MarkerClusterer options={options}>
            {(clusterer) => {
              return currentCars.map((marker, i) =>
              (
                <Marker
                  clusterer={clusterer}
                  position={marker.location}
                  clickableIcons={true}
                  onClick={() => { setData(marker) }}
                  noClustererRedraw={true}
                />

              ))
            }
            }
          </MarkerClusterer>
        </GoogleMap>
        : <div />}
    </LoadScript>
  )
}
