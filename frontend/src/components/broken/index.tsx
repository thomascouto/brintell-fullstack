import React from 'react'
import broken from '../../assets/broken.svg'
import styles from '../../scss/broken.module.scss'
const Broken = () => {
	return (
		<div className={styles.broken}>
			<h1>Oh no...</h1>
			<img src={broken} />
		</div>
	)
}

export default Broken
