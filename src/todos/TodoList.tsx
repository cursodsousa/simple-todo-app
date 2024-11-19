import { Todo } from "./todo";

interface TodoListProps {
    list: Array<Todo>;
    onFinish: (todo: Todo) => void;
    onRemove: (todo: Todo) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ list, onFinish, onRemove } : TodoListProps) => {
    
    function mapRow(todo: Todo, index: number){
        return (
            <tr key={index}>
                <td>
                    {todo.description}
                </td>
                <td>
                    { todo.done ? "Done" : "Pending"}
                </td>
                <td>
                    <button 
                        type="button"
                        disabled={todo.done}
                        onClick={event => onFinish(todo)} 
                        className={`${todo.done ? 'opacity-50 pointer-events-none' : ''} max-w-sm w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition`}>
                        Finish
                    </button>
                </td>
                <td>
                    <button 
                        type="button"
                        onClick={event => onRemove(todo)} 
                        className="max-w-sm w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition">
                        Remove
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="min-w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                            Description
                        </th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                            Status
                        </th>
                        <th colSpan={2} className="px-6 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { list.map(mapRow) }
                </tbody>
            </table>
        </div>
    )
}