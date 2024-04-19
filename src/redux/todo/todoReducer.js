const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((elem)=>elem.id!=action.id)
      };
      case "EDIT_TODO":
        return {
          ...state,
          todos: [
            ...state.todos.slice(0, action.index), 
            { ...state.todos[action.index], currentStatus: action.payload }, 
            ...state.todos.slice(action.index + 1)
          ]
        };


        case "SET_TODO":
          return {
            ...state,
            todos:action.payload
          };
  }
  return state;
};

export default todoReducer;
