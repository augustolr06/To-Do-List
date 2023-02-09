import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Header } from './components/Header/Header';

import styles from './App.module.css';
import './global.css';
import { CounterMessage } from './components/CounterMessage/CounterMessage';
import { EmptyTaskArea } from './components/EmptyTaskArea/EmptyTaskArea';
import { Task, TaskProps } from './components/Task/Task';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';

export function App() {
	const [taskList, setTaskList] = useState<TaskProps[]>([]);
	const [newTask, setNewTask] = useState<TaskProps>({ textContent: ''});

	function handleCreateNewTask (e: FormEvent) {
		e.preventDefault();
		setTaskList(prevstate => [...prevstate, newTask]);
		setNewTask({textContent: ''});
	}

	function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
		setNewTask({textContent: e.target.value});
	}

	console.log(taskList);
  

	return (
		<div className={styles.app}>

			<Header />
			<form className={styles.TaskCreator} onSubmit={handleCreateNewTask}>
				<Input placeholder='Adicione uma tarefa' value={newTask.textContent} onChange={handleNewTaskChange} />
				<Button type='submit' label='Criar' icon='add' />
			</form>
			<div className={styles.taskArea}>
				<div className={styles.taskAreaHeader}>
					<CounterMessage label='Tarefas Criadas' createdTasks={10}/>
					<CounterMessage label='Concluídas' createdTasks={10} finishTasks={4} />
				</div>
				{taskList.length === 0 ?
					<EmptyTaskArea />
					:
					taskList.map((task, index) => {
						return (<Task key={index} textContent={task.textContent} />);
					})
				}
			</div>
		</div>
	);
}
