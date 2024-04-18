import { ADD_TODO } from "./Types";


export const addTodo=(todo)=>{
    return{
        type:ADD_TODO,
        payload:todo,
    }
}