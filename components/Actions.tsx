"use client"
import React from 'react'
import UpdateTodo from './UpdateTodo'
import DeleteTodo from './DeleteTodo'
interface IProps{
todo:any
}
const Actions=({todo}:IProps)=> {
 
  
  return (
    <>
     <UpdateTodo todo={todo}/>
     <DeleteTodo id={todo.id}/>
    </>
  )
}

export default Actions