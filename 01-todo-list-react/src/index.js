import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const TodoList = [
    {id: 1, text: 'Learn React', isCompleted: true},
    {id: 2, text: 'Learn Redux', isCompleted: false},
    {id: 3, text: 'Learn React Router', isCompleted: false},
    {id: 4, text: 'Learn React Native', isCompleted: false},
    {id: 5, text: 'Learn GraphQL', isCompleted: false}
]

const TodoItem = ({todoItem}) => (
    <tr>
        <td>{todoItem.id}</td>
        <td>{todoItem.text}</td>
        <td>{todoItem.isCompleted ? 'Yes' : 'No'}</td>
    </tr>
);

const List = ({todoList}) => (
    <table>
        <thead>
        <tr>
            <th>id</th>
            <th>text</th>
            <th>isCompleted</th>
        </tr>
        </thead>
        <tbody>
        {todoList.map((todoItem) => <TodoItem key={todoItem.id} todoItem={todoItem}/>)}
        </tbody>
    </table>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <List todoList={TodoList}/>
    </>
);
