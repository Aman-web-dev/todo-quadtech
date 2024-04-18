const initialState = {
  todos: [{ id: 0, title: "", description: "", status: "" }],
  filter: "all",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
  }
  return state
};



export default todoReducer