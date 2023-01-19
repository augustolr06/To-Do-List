import { PlusCircle } from 'phosphor-react';

import styles from './TaskCreator.module.css';

export function TaskCreator(){

	return(
		<div className={styles.TaskCreator}>

			<input type="text" placeholder='Adicione uma nova tarefa' />
			<button>
                Criar
				<PlusCircle size={16}/>
			</button>

		</div>
	);
}