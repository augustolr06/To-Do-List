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
	const [newTaskContent, setNewTaskContent] = useState('');

	function handleCreateNewTask (e: FormEvent) {
		e.preventDefault();
		const lastTask = taskList ? taskList[taskList.length - 1] : null;
		const idNewTask = lastTask ? lastTask.id + 1 : 1;
		const newTask:TaskProps = {id: idNewTask , textContent: newTaskContent, done: false};
		setTaskList(prevstate => [...prevstate, newTask]);
	}

	function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
		setNewTaskContent(e.target.value);
	}

	function handleDoneTaskById(id: number){
		const taskToBeDoneIndex = taskList.findIndex(task => task.id === id);
		const taskToBeDone = taskList[taskToBeDoneIndex];
		taskToBeDone.done = !taskToBeDone.done;
		const newTaskList = [...taskList];
		newTaskList[taskToBeDoneIndex] = taskToBeDone;
		setTaskList(newTaskList);
	}

	function handleDeleteTaskById(id:number){
		const newTaskList = taskList.filter(task => task.id !== id);
		setTaskList(newTaskList);
	}

	function getFinishedTasksNumber() {
		let finishedTasks = 0;
		taskList.forEach((task) => {
			if (task.done) {
				finishedTasks += 1;
			}
		}
		);
		return finishedTasks;
	}

	return (
		<div className={styles.app}>

			<Header />
			<form className={styles.TaskCreator} onSubmit={handleCreateNewTask}>
				<Input placeholder='Adicione uma tarefa' value={newTaskContent} onChange={handleNewTaskChange} />
				<Button type='submit' label='Criar' icon='add' />
			</form>
			<div className={styles.taskArea}>
				<div className={styles.taskAreaHeader}>
					<CounterMessage label='Tarefas Criadas' createdTasks={taskList.length}/>
					<CounterMessage label='Concluídas' createdTasks={taskList.length} finishedTasks={getFinishedTasksNumber()} />
				</div>
				{taskList.length === 0 ?
					<EmptyTaskArea />
					:
					taskList.map((task) => {
						return (<Task key={task.id} id={task.id} textContent={task.textContent} done={task.done} onDone={() => handleDoneTaskById(task.id)} onDelete={() => handleDeleteTaskById(task.id)} />);
					})
				}
			</div>
		</div>
	);
}
