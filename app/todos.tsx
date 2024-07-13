

import { findTodo } from '@/actions/todoAction'
import { Button } from '@/components/ui/button'
import { log } from 'console'
import React from 'react'
interface IProps{

}
const Todos=async({}:IProps)=> {
    let todos=await findTodo()
    // log(todos)
 
  return (
    <div className='mt-3'>
      {
        todos?.map((todo)=>(
          <div className='flex justify-between  m-2 gap-3 even:bg-slate-200 dark:even:bg-slate-700 border border-slate-300 border-1 rounded-lg p-2'>
            <p className='text-2xl'>{todo.title}</p>
            <p className='text-md'>{todo.body.slice(0,60)}</p>
            <p className='text-md'>{todo.completed?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>}</p>
            <div className='flex gap-3'>
              <Button variant={"secondary"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg></Button>
              <Button variant={"destructive"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></Button>

            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Todos