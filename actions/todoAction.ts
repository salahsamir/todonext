'use server'
import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const createTodo = async ({title,body,completed}:{title:string,body?:string,completed?:boolean})=>{

    return await prisma.todo.create({
        data:{
            title,
            body,
            completed
        }
        })
}
export const findTodo = async ()=>{
    let todos =await prisma.todo.findMany()
    return todos
}
export const updateTodo = async ()=>{}
export const deleteTodo = async (id:string)=>{

    return await prisma.todo.delete({
        where:{
            id
        }
    })
}
