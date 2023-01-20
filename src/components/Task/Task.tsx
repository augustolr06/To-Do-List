import React, { useState } from 'react';
import styles from './Task.module.css';
import { CheckCircle, Circle, Trash } from 'phosphor-react';


export function Task() {
	const [doneTask, setDoneTask] = useState(false);

	function handleDoneTask(){
		doneTask ? setDoneTask(false) : setDoneTask(true);
	}

	return (
		<div className={styles.Task}>
			<button onClick={handleDoneTask}>
				{
					doneTask ? <CheckCircle size={24} color='#5E60CE' weight='bold' /> : <Circle size={24} color='#4EA8DE' weight='bold' />
				}
			</button>
			
			<span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
			<Trash size={24} color='#808080'/>
		</div>
	);
}
