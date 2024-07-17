
"use client";
import { todoFormSchema, TodoFormValues } from '@/schema';
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
 
  DialogTitle,
 DialogDescription
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Pen} from "lucide-react"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea

import {  updateTodo } from '@/actions/todoAction';
import { Checkbox } from './ui/checkbox';


interface UpdateTodoProps {
  todo: TodoFormValues
}

const UpdateTodo=({todo}:UpdateTodoProps)=> {
   let [open ,setOpen]=useState(false)
    let defaultValues: Partial<TodoFormValues> = {
        title:todo.title ,
        body:todo.body,
        completed: todo.completed,
      };
    
      let [load,setLoading]=useState(false)
    
    const form = useForm<TodoFormValues>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange",
      });
      let cleanUp=()=>{
        form.reset()
        setLoading(false)
        setOpen(false)
      }
    
     async  function onSubmit(values: TodoFormValues) {
    
        setLoading(true)
        await updateTodo(todo.id as string, values)
        cleanUp()
        
      }
  return (
    <div>
         <div className="flex justify-end">
        <Dialog open={open} onOpenChange={setOpen}>
      
          <DialogTrigger asChild>
          <Button variant={"secondary"} size={"icon"} onClick={()=>console.log(todo)}><Pen/></Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-blue-800 text-center dark:text-blue-200">Update Todo</DialogTitle>
              <DialogDescription>
                Update your Todo
              </DialogDescription>
             
            </DialogHeader>
            <div className="py-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="title" {...field} />
                        </FormControl>
                       
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Body</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder=" add some tips"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                       
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                    <FormField
                    control={form.control}
                    name="completed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                       
                        <FormControl>
                        <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                <FormLabel>
                  Completed
                </FormLabel>
                <FormDescription>
                  You can manage your mobile notifications in the{" "}
                 
                </FormDescription>
              </div>
                       
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <DialogFooter className="my-3">
              <Button type="submit" >{load?<Pen className="h-4 w-4 animate-spin"/>:<Pen className="h-4 w-4"/>}</Button>
            </DialogFooter>
                </form>
                 
              </Form>
            </div>
          
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default UpdateTodo