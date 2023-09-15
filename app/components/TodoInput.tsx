import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../slice/todoSlice";
import TodoControl from "./TodoControl";

export default function TodoInput() {
  const [inputValue, setInputvalue] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (title: string) => {
    dispatch(addTodo(title));
    setInputvalue("");
  };

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className=" tracking-widest uppercase text-2xl font-extralight mb-4">todo_list</h1>
      <div className="w-full flex flex-col items-center">
        <div className="w-full mb-4">
          <div className="w-full flex items-stretch justify-start shadow border-b border-black">
            <input
              className="w-full py-2 text-xs px-4 rounded-tl"
              placeholder="Create new todo..."
              type="text"
              onChange={(e) => {
                setInputvalue(e.target.value);
              }}
              value={inputValue}
            />
            <button
              className="px-6 text-2xl text-black bg-slate-400 hover:bg-slate-200 duration-300 hover:text-green-400 py-4 cursor-pointer rounded-tr"
              onClick={() => {
                addTodoHandler(inputValue);
              }}
            >
              &#9998;
            </button>
          </div>
          <TodoControl />
        </div>
      </div>
    </div>
  );
}
