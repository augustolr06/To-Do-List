import React from 'react';
import styles from './Task.module.css';
import { CheckCircle, Circle, Trash } from 'phosphor-react';

export interface TaskProps {
  id: number
  textContent: string
  done?: boolean
  onDone?: () => void
  onDelete?: () => void
}

export function Task(props: TaskProps) {
	const { textContent, done, onDone, onDelete } = props;

	return (
		<div className={styles.Task}>
			<button onClick={onDone}>
				{
					done ? 
						<CheckCircle size={24} weight='fill' className={styles.checkedButton} />
						: 
						<Circle size={24} weight='bold' className={styles.uncheckedButton} />
				}
				<img src='src\assets\shadow.svg' className={styles.shadow}></img>
			</button>
			
			<span className={done ? styles.doneText : styles.defaultText} >
				{textContent}
			</span>
      
			<button onClick={onDelete}>
				<Trash size={24} className={styles.delete} />
			</button>
		</div>
	);
}
