import { createSlice } from "@reduxjs/toolkit";

import {v4 as uuidv4} from "uuid";


export interface ITodoItem {
    id: string;
    title: string;
    isDone: boolean;
  }

  export interface IFilteres {
    title: string,
    active: boolean,
  }

interface IStateList {
    todos: ITodoItem[],
    filteres: IFilteres[],
    originTodo: ITodoItem[]
}


const initialState: IStateList = {
    todos: [],
    filteres: [{title: 'All', active: true,}, {title: 'Active', active: false,}, {title: 'Completed', active: false,}],
    originTodo:[],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
            removeTodo:  (state, action) => {
              state.todos = state.todos.filter((todo) => todo.id != action.payload);
              state.originTodo = state.todos
          },
          addTodo: (state, action) => {
            if(action.payload.trim()==='') return
            const todo = {id: uuidv4(), title: action.payload, isDone: false};
            state.todos.push(todo);
            state.originTodo=state.todos
          },
          changeCompleteTodo: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) {
              todo.isDone = !todo.isDone;
            }
            state.originTodo=state.todos
          },
          
          changeFilterComplet: (state, action)=> {
            state.filteres.forEach(filter=>filter.active = false)
            const selectFilter = state.filteres.find(filter=>filter.title === action.payload)
            if(selectFilter)  selectFilter.active = true;
            if(action.payload === 'All') {
              state.originTodo = state.todos
            } else if (action.payload === 'Active') {
              state.originTodo = state.todos.slice().filter((todo)=>!todo.isDone)
            } else if (action.payload === 'Completed') {
               state.originTodo = state.todos.slice().filter((todo)=>todo.isDone)
            }
          }

    }
})

export const {removeTodo, addTodo, changeCompleteTodo, changeFilterComplet} = todosSlice.actions

export default todosSlice.reducer