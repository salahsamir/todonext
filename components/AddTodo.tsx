
"use client";
import { todoFormSchema, TodoFormValues } from '@/schema';
import React from 'react'
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


const AddTodo=()=> {
    const defaultValues: Partial<TodoFormValues> = {
        title: "",
        body: "",
        // commpleted: false,
      };
    const form = useForm<TodoFormValues>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange",
      });
      let cleanUp=()=>{
        form.reset()
        
      
      }
    
     async  function onSubmit(values: TodoFormValues) {
     
      
        await createTodo({
          title: values.title,
          body: values.body})
        cleanUp()
        
      }
  return (
    <div>
         <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline"><PlusIcon className='mr-2'/> Create A New Todo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-blue-600">New Todo</DialogTitle>
              <DialogDescription className="text-blue-300 text-sm">
                create a new todo
              </DialogDescription>
            </DialogHeader>
            <div className="py-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                   <DialogFooter className="my-3">
              <Button type="submit">Add Todo</Button>
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