import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { http } from '../../api/request'
import styles from '../../scss/chart.module.scss'

interface Percent {
	male: number
	female: number
}

const Chart = () => {
	const [data, setData] = React.useState<Percent>({ male: 0, female: 0 })

	const fetchData = async () => {
		try {
			const { male, female } = await http.getChartData()
			setData({ male, female })
		} catch (error) {
			console.log(error)
		}
	}

	React.useEffect(() => {
		fetchData()
	}, [])

	return (
		<div className={styles.pie}>
			<PieChart
				data={[
					{ title: 'Homens', value: data.male, color: '#E38627' },
					{ title: 'Mulheres', value: data.female, color: '#C13C37' },
				]}
				label={({ dataEntry }) => dataEntry.value}
			/>
		</div>
	)
}

export default Chart
