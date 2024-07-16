'use server'
import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()


export const createTodo = async ({title,body,completed,userId}:{title:string,body?:string,completed?:boolean,userId:string})=>{

    await prisma.todo.create({
        data:{
            title,
            body,
            completed,
            userId
        }
        })
        revalidatePath('/')
}
export const findTodo = async (userId:string)=>{
    let todos =await prisma.todo.findMany({
        where:{
            userId
        }
        ,
        orderBy:{
            created_at:'desc'
        }
    })
    return todos
}
export const updateTodo = async (id:string,data:TodoFormValues)=>{
    
    await prisma.todo.update({
        where:{
            id
        },
        data:{
            ...data
        }
    })
    revalidatePath('/')
}
export const deleteTodo = async (id:string)=>{

    await prisma.todo.delete({
        where:{
            id
        }
    })
    revalidatePath('/')
}
