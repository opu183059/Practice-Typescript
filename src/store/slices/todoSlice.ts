import { createSlice } from "@reduxjs/toolkit"

export interface todoObject {
    id: number;
    task: String;
}

interface todoList {
    todos: todoObject[]
}

const initialState: todoList = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: action.payload.id,
                task: action.payload.task,

            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id != action.payload))
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer