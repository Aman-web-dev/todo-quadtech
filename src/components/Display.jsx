import { useEffect, useState } from "react";
import TodoCards from "./TodoCard";
import { connect } from "react-redux";
import { setTodo } from "../redux";

function TodoDisplay(props) {

  //this state will keeep tract that it is a initial load and will not change again
  const [firstLoad, setFirstLoad] = useState(true);

  console.log("I changed");

  //this will get the saved todos from local storage
  useEffect(() => {
    const storedArrayString = localStorage.getItem("todos");
    if (storedArrayString) {
      const array = JSON.parse(storedArrayString);
      props.setTodo(array);
    } else {
      console.log("No array found in localStorage");
    }
  }, []);


//this will add the todos in the local storage 
  useEffect(() => {
    console.log("todos hai ji", props.todos, firstLoad);
    if (!firstLoad) {
      console.log("setting the item");
      localStorage.setItem("todos", JSON.stringify(props.todos));
    }
    setFirstLoad(false);
  }, [props.todos]);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      //mapping all teh todos and passing props to them
      {props.todos.map((elem, index) => {
        return (
          <TodoCards
            index={index}
            key={elem.id}
            title={elem.title}
            desc={elem.description}
            currentStatus={elem.currentStatus}
            todo_id={elem.id}
          />
        );
      })}
    </div>
  );
}


//this will map the state to the component using connect
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};


//this will map the dispatch to the component using connect
const mapActionsToProps = (dispatch) => {
  return {
    setTodo: (array) => {
      dispatch(setTodo(array));
    },
  };
};


//using a connect method from redux to connect props and actions to the component
export default connect(mapStateToProps, mapActionsToProps)(TodoDisplay);
