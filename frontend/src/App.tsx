import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Broken from './components/broken'
import Chart from './components/chart'
import Layout from './components/layout'
import Map from './components/map'
import ResultsTable from './components/table'
import Menu from './Menu'
import styles from './scss/menu.module.scss'

const NewApp = () => {
	return (
		<div className={styles.container}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" index element={<Menu />} />
					<Route path="list" element={<ResultsTable />} />
					<Route path="chart" element={<Chart />} />
					<Route path="map" element={<Map />} />
					<Route path="*" element={<Broken />} />
				</Route>
			</Routes>
		</div>
	)
}

export default NewApp
