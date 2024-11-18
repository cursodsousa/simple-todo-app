import { useState, useEffect } from 'react'
import { Todo } from './todo'

export function useTodoLogic(){
    const apiBaseURL = 'http://localhost:3001/todos'
    const [list, setList] = useState<Todo[]>([])

    useEffect(() => {
        const loadTodos = () => {
            fetch(apiBaseURL)
                .then(response => response.json())
                .then(todos => setList(todos))
        }

        loadTodos();
    }, [])

    function addTodo(todo: Todo){
        fetch(apiBaseURL, {
            method: 'POST',
            body: JSON.stringify(todo)
        }).then(response => setList([...list, todo]))        
    }

    function updateTodoStatus(todo: Todo){
        todo.done = !todo.done;
        fetch(`${apiBaseURL}/${todo.id}`, {
            method: 'PUT',
            body: JSON.stringify(todo)
        }).then(response => setList([...list]))  
    }

    function removeTodo(todo: Todo){
        fetch(`${apiBaseURL}/${todo.id}`, {
            method: 'DELETE'
        }).then(response => {
            const newList = list.filter(_todo => _todo.id !== todo.id)
            setList(newList)
        })  
    }

    return { list, addTodo, updateTodoStatus, removeTodo }
}