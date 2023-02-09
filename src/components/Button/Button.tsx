import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

import { PlusCircle } from 'phosphor-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  icon?: 'add' // | 'outro que seja necessário
  onPress?: () => void
}

export function Button(props:ButtonProps) {
	const { icon, label, onPress, ...rest } = props;
	return (
		<button className={styles.Button} onClick={onPress} {...rest}>
			{label}
			{
				icon === 'add' &&
        <PlusCircle size={16}/>
			}
			
		</button>
	);
}
