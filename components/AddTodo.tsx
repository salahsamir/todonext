
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
  DialogClose,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea
import { PlusIcon } from 'lucide-react';
import { createTodo } from '@/actions/todoAction';
import { Checkbox } from './ui/checkbox';


const AddTodo=()=> {
   let [open ,setOpen]=useState(false)
    const defaultValues: Partial<TodoFormValues> = {
        title: "",
        body: "",
        completed: false,
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
        await createTodo({
          title: values.title,
          body: values.body,
          completed: values.completed})
        cleanUp()
        
      }
  return (
    <div>
         <div className="flex justify-end">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" ><PlusIcon className='mr-2' /> Create A New Todo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-blue-800">New Todo</DialogTitle>
              <DialogDescription className="text-blue-900 text-sm">
                create a new todo
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
              <Button type="submit" >{load?<PlusIcon className="h-4 w-4 animate-spin"/>:<PlusIcon className="h-4 w-4"/>}</Button>
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

export default AddTodo