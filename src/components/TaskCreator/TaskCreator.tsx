import React from 'react';
import { Button } from '../Button/Button';

import styles from './TaskCreator.module.css';

export function TaskCreator(){

	return(
		<div className={styles.TaskCreator}>

			<input type="text" placeholder='Adicione uma nova tarefa' />
			<Button label='Criar' icon='add' />

		</div>
	);
}
