import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import MapMarker from './Marker'
import styles from '../../scss/map.module.scss'
import 'leaflet/dist/leaflet.css'

const Map = () => {
	const mapRef = React.useRef(null)

	return (
		<div className={styles.mainContainer}>
			<MapContainer
				ref={mapRef}
				center={{ lat: -13.58, lng: -49.39 }}
				zoom={4}
				className={styles.leafletContainer}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapMarker lat={-4.04} lng={-37.97} />
				<MapMarker lat={-22.92} lng={-42.1} />
				<MapMarker lat={-15.79} lng={-48.34} />
				<MapMarker lat={-4.13} lng={-59.33} />
			</MapContainer>
		</div>
	)
}

export default Map
