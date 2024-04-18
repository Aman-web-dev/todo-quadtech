import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux";


function TodoCards(props) {
  function handleTodoDelete(todo_id) {
  
    props.deleteTodo(todo_id)
  }


  function handleUpdate(index,data) {
    props.editTodo(index,data)
  }

  return (
    <div
      className={`min-w-[20vw] mx-auto  p-6 border    border-gray-200 rounded-lg shadow bg-opacity-55 m-2 ${
        props.bgColor
      } ${
        props.currentStatus === "todo"
          ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-black"
          : props.currentStatus === "done"
          ? "bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-black "
          : props.currentStatus === "postponed"
          ? "bg-gradient-to-r from-emerald-500 to-emerald-900 text-white"
          : props.currentStatus === "cancelled"
          ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white"
          : ""
      }`}
    >
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-wrap">
          Todo: {props.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-wrap w-[100%]">
        Description:{props.desc}
      </p>

      <section className="flex flex-col w-[70%]">
        <select
          id="countries"
          className="bg-gray-50 my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            handleUpdate(props.index,e.target.value);
          }}
          required
          value={props.currentStatus}
        >
          <option value="todo">Todo</option>
          <option value="done">Done</option>
          <option value="cancelled">Cancelled</option>
          <option value="postponed">postponed</option>
        </select>
        <button
          onClick={() => handleTodoDelete(props.todo_id)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-red-400"
        >
          Delete
        </button>
      </section>
    </div>
  );
}



const mapActionAsProps=dispatch=>{
  return{
    deleteTodo:(id)=>dispatch(deleteTodo(id)),
    editTodo:(index,data)=>dispatch(editTodo(index,data))
  }
}

export default connect(null,mapActionAsProps)(TodoCards);
