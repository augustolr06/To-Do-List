import React, { useState } from 'react';
import styles from './Task.module.css';
import { CheckCircle, Circle, Trash } from 'phosphor-react';

export interface TaskProps {
  textContent: string
}

export function Task(props: TaskProps) {
	const { textContent } = props;
	const [doneTask, setDoneTask] = useState(false);

	function handleDoneTask(){
		doneTask ? setDoneTask(false) : setDoneTask(true);
	}

	return (
		<div className={styles.Task}>
			<button onClick={handleDoneTask}>
				{
					doneTask ? 
						<CheckCircle size={24} weight='fill' className={styles.checkedButton} />
						: 
						<Circle size={24} weight='bold' className={styles.uncheckedButton} />
				}
				<img src='src\assets\shadow.svg' className={styles.shadow}></img>
			</button>
			
			<span className={doneTask ? styles.doneText : styles.defaultText} >
				{textContent}
			</span>
      
			<button>
				<Trash size={24} className={styles.delete} />
			</button>
		</div>
	);
}
