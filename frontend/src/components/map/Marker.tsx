import React from 'react'
import { Marker, useMapEvent } from 'react-leaflet'

const MapMarker = ({ lat, lng }: LatLngLiteral) => {
	const markerRef = React.useRef(null)
	const map = useMapEvent('click', (e) => {
		map.panTo(e.latlng)
	})

	return <Marker position={{ lat, lng }} ref={markerRef} />
}

export default MapMarker
