import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

// define constants
// const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
    // console.log('event DATA:', eventData)
    const [locationInfo, setLocationInfo] = useState(null)
    // const KEY= 'AIzaSyAR-r8GJmwcm-9s2gqKkKHa3K4Km145a7Q'
    if (!eventData || eventData.length === 0){
        return null
    }
    
    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === 8) {
            // console.log('ev categories', ev.categories)
            return ( <LocationMarker key={index}  lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    )}
        return null
    })
    // console.log('markers', markers)


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAR-r8GJmwcm-9s2gqKkKHa3K4Km145a7Q' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
                
                
            </GoogleMapReact>
           
           
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 40.54269,
        lng: -122.50196
    },
    zoom: 6

}

export default Map


// {locationInfo && <LocationInfoBox info={locationInfo} />}
// {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}