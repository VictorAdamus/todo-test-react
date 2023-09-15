import React from "react";

import {ITodoItem, removeTodo, changeCompleteTodo} from "../slice/todoSlice";
import {useDispatch, useSelector} from "react-redux";

export default function TodoList() {
  const dispatch = useDispatch();

  const removeTodoHandler = (id: string) => {
    dispatch(removeTodo(id));
  };
  const changeCompleteTodoHandler = (id: string) => {
    dispatch(changeCompleteTodo(id));
  };

  const todos = useSelector((state: any) => state.todos.originTodo);

  return (
    <ul className=" flex flex-col w-full bg-transparent m-0 gap-2">
      {todos.length ?
      todos.map((todo: ITodoItem) => (
        <li className={`flex items-center rounded pl-4 bg-black/20 justify-start ${todo.isDone && 'bg-green-700/20'}`} key={todo.id}>
          <span  className={`w-full italic ${todo.isDone && ' text-white line-through'}`}>{todo.title}</span>
         <label className="p-4 cursor-pointer flex items-center justify-center">
            <input className="hidden" type="checkbox" checked={todo.isDone} onChange={()=>{changeCompleteTodoHandler(todo.id)}} />
            <span className={`${todo.isDone && 'text-green-500'}`}>&#10004;</span>
         </label>
          <button className="px-6 duration-300 text-white hover:text-black py-4 bg-red-600/50 hover:bg-red-600 rounded-r ml-4" onClick={()=>{removeTodoHandler(todo.id)}}>&#10008;</button>{" "}
        </li>
      )):
      <div className="flex flex-col items-center p-4 border rounded border-slate-700/40">
        <span className="font-extrabold text-2xl text-lime-900/30">Now is the time</span>
        <span className="font-extrabold text-2xl text-indigo-900/30">to add </span>
        <span className="font-extrabold text-2xl text-red-900/30">a new task</span>
      </div>
      }
    </ul>
  );
}
