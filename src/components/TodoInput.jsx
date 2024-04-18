import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/index";

function TodoInput(props) {
  const [todo, setTodo] = useState({
    id:"",
    title: "",
    description: "",
    currentStatus: "todo",
  });

  const handleTodoInput = async (e) => {
    e.preventDefault();
    const todo_id = JSON.stringify(Date.now());
    props.addTodo({ ...todo, id: todo_id });
    props.close();
  };

  return (
    <div className="w-full h-full" onSubmit={(e) => handleTodoInput(e)}>
      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Todo"
          >
            Todo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo"
            type="text"
            placeholder="Todo"
            value={todo.title}
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value });
            }}
          />
        </div>
        <section className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Todo"
          >
            Description
          </label>
          <textarea
            id="message"
            minLength={40}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            value={todo.description}
            onChange={(e) => {
              setTodo({ ...todo, description: e.target.value });
            }}
          ></textarea>
        </section>

        <section className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Todo"
          >
            currentStatus
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={todo.currentStatus}
            onChange={(e) => {
              setTodo({ ...todo, currentStatus: e.target.value });
            }}
            required
          >
            <option value="todo">Todo</option>
            <option value="done">Done</option>
            <option value="cancelled">Cancelled</option>
            <option value="postponed">postponed</option>
          </select>
        </section>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

const mapDisPatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, mapDisPatchToProps)(TodoInput);
