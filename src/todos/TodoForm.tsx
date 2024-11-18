import { useState } from "react";
import { Todo } from "./todo"

interface TodoFormProps {
    onSubmit: (todo: Todo) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit } : TodoFormProps) => {

    const [description, setDescription] = useState<string>('');

    function handleSubmit(){
        const newTodo = new Todo(description, false);
        onSubmit(newTodo);
        setDescription('')
    }

    return (
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Description: </label>
                <input placeholder="Start typing your task description" 
                       value={description}
                       className="w-full px-4 py-2" onChange={event => setDescription(event.target.value)} />
            </div>
            <button 
                type="button"
                onClick={handleSubmit} 
                className="mb-5 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition">
                Add
            </button>
        </form>
    )
}