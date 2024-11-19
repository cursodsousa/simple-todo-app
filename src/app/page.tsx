"use client"

import { TodoForm, TodoList, useTodoLogic } from 'todos'

export default function Home() {

  const logic = useTodoLogic();

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">My Tasks</h2>
        <TodoForm onSubmit={logic.addTodo} />
        <TodoList list={logic.list} onFinish={logic.updateTodoStatus} onRemove={logic.removeTodo} />
    </div>
  );
}
