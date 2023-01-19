import React from 'react';

import { Header } from './components/Header/Header';
import { TaskCreator } from './components/TaskCreator/TaskCreator';

import styles from './App.module.css';
import './global.css';

export function App() {

	return (
		<div className={styles.app}>

			<Header />
			<TaskCreator />
			<div className={styles.taskArea}>
				<div className={styles.taskAreaHeader}>
					<span>terfeas criadas</span>
					<span>concluídas</span>
				</div>

			</div>
		</div>
	);
}
