import React, { useState } from 'react';

interface Todo {
  text: string;
  id: string;
}

const TodoList = () => {
  const [Todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const HandleChange = () => {
    if (!input.trim()) return;

    setTodos((prev) => [...prev, { text: input, id: Date.now().toString() }]);
    setInput("");
  };

  const HandleRemove = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-300 flex justify-center items-start pt-20 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">🌟 Todos App</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            placeholder="What do you need to do?"
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-teal-400"
          />

          <button
            onClick={HandleChange}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">📝 Todo List</h2>

        <ul className="space-y-3">
          {Todos.length === 0 ? (
            <p className="text-gray-500 text-center">No todos yet!</p>
          ) : (
            Todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-teal-50 border border-teal-200 rounded-lg px-4 py-2"
              >
                <span className="text-gray-800">{todo.text}</span>
                <button
                  onClick={() => HandleRemove(todo.id)}
                  className="text-red-500 hover:text-red-700 text-lg"
                  title="Delete"
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
