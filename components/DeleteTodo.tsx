"use client"
import { deleteTodo } from '@/actions/todoAction'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
interface IProps{
id: string
}
const DeleteTodo=({id}:IProps)=> {
    let [load,setload]=useState(false)
    let DeleteTodo=async(id:string)=>{

        setload(true)
        await deleteTodo(id)
        setload(false)

      }
      
  return (
    <Button variant={"destructive"} size={"icon"} onClick={()=>DeleteTodo(id)} >{load?<Trash className="h-4 w-4 animate-spin"/>:<Trash className="h-4 w-4"/>}</Button>
  )
}

export default DeleteTodo