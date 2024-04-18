import { useEffect, useState } from "react";
import TodoCards from "./TodoCard";
import { connect } from "react-redux";
import { setTodo } from "../redux";

function TodoDisplay(props) {
  const [loaded, setLoaded] = useState();

  console.log("I changed");

  useEffect(() => {

    const storedArrayString = localStorage.getItem("todos");
    if (storedArrayString) {
      const array = JSON.parse(storedArrayString);
      props.setTodo(array);
      setLoaded(true);
    } else {
      console.log("No array found in localStorage");
    }
  }, []);
  
  useEffect(() => {
    console.log("todos hai ji",props.todos)
      if(props.todos.length!=0){
        console.log("setting the item");
        localStorage.setItem("todos", JSON.stringify(props.todos));  
      }
  }, [props.todos]); 
  
  return (
    <div className="flex flex-wrap gap-4 p-4">
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setTodo: (array) => {
      dispatch(setTodo(array));
    },
  };
};

export default connect(mapStateToProps, mapActionsToProps)(TodoDisplay);
