import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App(): JSX.Element {

    const tasks: TaskType[] = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "CSS & SCSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
    ]

    const tasks1: TaskType[] = [
        {id: 1, title: "HTML & CSS", isDone: false},
        {id: 2, title: "CSS & SCSS", isDone: false},
        {id: 3, title: "ES6/TS", isDone: false},
    ]
    return (
        < div className='App'>
            <TodoList classTodo = 'todolist1' title={'What to learn'} tasks={tasks}/>
            <TodoList classTodo = 'todolist2' title={'What to buy'} tasks={tasks1}/>
            <TodoList classTodo = 'todolist3' title={'What to read'} tasks={tasks}/>
        </div>
    );
}

export default App;
