import TodoCards from "./TodoCard";
import { connect } from "react-redux";

function TodoDisplay(props) {

  return (
    <div className="flex flex-wrap gap-4 p-4">

        {props.todos?.map((elem, index) => {
          return (
            <TodoCards
              key={elem.id}
              title={elem.title}
              desc={elem.description}
              status={elem.status}
              todo_id={elem.todo_id}
            />)})}
    </div>
  );    
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    };
  };

export default connect(mapStateToProps,null)(TodoDisplay);
