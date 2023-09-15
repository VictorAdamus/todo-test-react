"use client";
import {store} from "./slice";
import {Provider} from "react-redux";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="font-thin container bg-slate-300/80 w-full mx-auto min-h-screen p-4 md:p-10">
        <div className="w-full mx-auto">
          <TodoInput />
          <TodoList />
        </div>
      </main>
    </Provider>
  );
}
