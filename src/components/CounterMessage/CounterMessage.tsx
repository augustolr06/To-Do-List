import React from 'react';
import styles from './CounterMessage.module.css';

export interface CounterMessageProps {
  label: 'Tarefas Criadas' | 'Concluídas',
  createdTasks: number,
  finishTasks?: number,
}

export function CounterMessage(props:CounterMessageProps) {
	const { label, createdTasks, finishTasks } = props;

	return (
		<div className={styles.counterMessage}>
			<span className={label=== 'Tarefas Criadas' ? styles.secondaryColorLabel : label === 'Concluídas' ? styles.tertiaryColorLabel : styles.defaultLabel} >
				{label}
			</span>
			<span className={styles.counter} >
				{finishTasks && `${finishTasks} de `}{createdTasks}
			</span>
		</div>
	);
}
