import React from 'react'
import { useNavigate } from 'react-router-dom'
import ModalWindow from './components/modal'
import styles from './scss/menu.module.scss'

const Menu = () => {
	const [isModalShown, setIsModalShown] = React.useState(false)
	const navigate = useNavigate()

	const handleClose = () => {
		setIsModalShown(false)
	}

	const handleOpen = () => {
		setIsModalShown(true)
	}
	return (
		<>
			<div className={styles.grid}>
				<button className={styles.signup} onClick={handleOpen}></button>
				<button className={styles.list} onClick={() => navigate('list')}></button>
				<button className={styles.pie} onClick={() => navigate('chart')}></button>
				<button className={styles.map} onClick={() => navigate('map')}></button>
				<ModalWindow show={isModalShown} handleModal={handleClose} />
			</div>
		</>
	)
}

export default Menu
