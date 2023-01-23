import React from 'react';
import styles from './Button.module.css';

import { PlusCircle } from 'phosphor-react';

export interface ButtonProps {
  label?: string
  icon?: 'add' // | 'outro que seja necessário
}

export function Button(props:ButtonProps) {
	const { icon, label } = props;
	return (
		<button className={styles.Button}>
			{label}
			{
				icon === 'add' &&
        <PlusCircle size={16}/>
			}
			
		</button>
	);
}
