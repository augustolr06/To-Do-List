import React from 'react';
import styles from './CounterMessage.module.css';

export interface CounterMessageProps {
  label: 'Tarefas Criadas' | 'Concluídas',
  createdTasks: number,
  finishedTasks?: number,
}

export function CounterMessage(props:CounterMessageProps) {
	const { label, createdTasks, finishedTasks } = props;
	return (
		<div className={styles.counterMessage}>
			{label === 'Tarefas Criadas' ?
				<>
					<span className={styles.secondaryColorLabel} >
						{label}
					</span>
					<span className={styles.counter} >
						{createdTasks}
					</span>
				</>
				: label === 'Concluídas' ?
					<>
						<span className={styles.tertiaryColorLabel} >
							{label}
						</span>
						<span className={styles.counter} >
							{`${finishedTasks} de `}{createdTasks}
						</span>
					</>
					:
					<></>
			}
			
		</div>
	);
}
