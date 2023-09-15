import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IFilteres } from '../slice/todoSlice';
import { changeFilterComplet } from '../slice/todoSlice';



export default function TodoControl() {

  const dispatch = useDispatch()

  const changeFilterHandler = (title: string) => {
    dispatch(changeFilterComplet(title))
  }
  
  const filteres = useSelector((state:any) => state.todos.filteres)


  return (
    <ul className='flex items-center justify-between gap-2'>
      {filteres.map((filter:IFilteres)=>(
        <li className='w-1/3' key={filter.title}><button className={`border border-t-0 w-full border-black text-sm rounded-b bg-slate-400 py-1 px-2 hover:opacity-25 ${filter.active && 'text-white bg-slate-600'}`} onClick={()=>{changeFilterHandler(filter.title)}}>{filter.title}</button></li>
      ))}
    </ul>
  )
}
