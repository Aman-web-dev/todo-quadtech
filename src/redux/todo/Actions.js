import { ADD_TODO,DELETE_TODO,EDIT_TODO,SET_TODO } from "./Types";


export const addTodo=(todo)=>{
    return{
        type:ADD_TODO,
        payload:todo,
    }
}


export const deleteTodo=(id)=>{
    return {
        type:DELETE_TODO,
        id:id
    }
}

export const editTodo=(index,newData)=>{
    return{
      type:EDIT_TODO,
      index:index,
      payload:newData
    }
}

export const setTodo=(savedTodo)=>{
    return{
      type:SET_TODO,
      payload:savedTodo
    }
}
