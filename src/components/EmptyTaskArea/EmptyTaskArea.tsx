import React from 'react';
import styles from './EmptyTaskArea.module.css';
import {ClipboardText} from 'phosphor-react';

export function EmptyTaskArea () {
	return (
		<div className={styles.EmptyTaskArea}>
			<ClipboardText size={56} weight="thin" style={{opacity: 0.3}} />
			<span>
				<strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
			</span>
		</div>
	);
}
