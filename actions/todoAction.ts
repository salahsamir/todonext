'use server'
import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()


export const createTodo = async ({title,body,completed}:{title:string,body?:string,completed?:boolean})=>{

    await prisma.todo.create({
        data:{
            title,
            body,
            completed
        }
        })
        revalidatePath('/')
}
export const findTodo = async ()=>{
    let todos =await prisma.todo.findMany()
    return todos
}
export const updateTodo = async ()=>{}
export const deleteTodo = async (id:string)=>{

    await prisma.todo.delete({
        where:{
            id
        }
    })
    revalidatePath('/')
}
