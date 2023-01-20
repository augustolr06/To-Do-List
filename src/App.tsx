import React from 'react';

import { Header } from './components/Header/Header';
import { TaskCreator } from './components/TaskCreator/TaskCreator';

import styles from './App.module.css';
import './global.css';
import { CounterMessage } from './components/CounterMessage/CounterMessage';
import { Task } from './components/Task/Task';

export function App() {

	return (
		<div className={styles.app}>

			<Header />
			<TaskCreator />
			<div className={styles.taskArea}>
				<div className={styles.taskAreaHeader}>
					<CounterMessage label='Tarefas Criadas' createdTasks={10}/>
					<CounterMessage label='Concluídas' createdTasks={10} finishTasks={4} />
				</div>
				<Task />
				<Task />
				<Task />
				<Task />

			</div>
		</div>
	);
}
