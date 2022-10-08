import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from '../../scss/layout.module.scss'

const Layout = () => {
	const navigate = useNavigate()
	return (
		<div>
			<span className={styles.home} onClick={() => navigate('/')}></span>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
