import styles from './Input.module.css';
import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

export function Input (props: InputProps) {
	const {placeholder, ...rest} = props;
	return (
		<input className={styles.input} type="text" placeholder={placeholder} {...rest} />
	);
}
