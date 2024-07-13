
import { findTodo } from "@/actions/todoAction"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check, Pen, Trash, X } from "lucide-react"



const Todos = async() => {
  let todos=await findTodo()
  // console.log(todos);
  

  return (
    <Table className="w-full rounded-md p-2 my-3">
    
      <TableHeader >
        <TableRow >
          <TableHead className="">Title</TableHead>
          <TableHead>Body</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right" >
            Actions

          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id} className=" even:bg-muted">
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell>{todo.body.slice(0, 50)}</TableCell>
            <TableCell className="mx-2">{todo.completed? <span className="text-green-500">Completed</span>: <span className="text-red-500 line-through">Not Completed</span>}</TableCell>
            <TableCell className="m-auto"> <div className='flex items-center justify-end gap-3'>
               <Button variant={"secondary"} size={"icon"}><Pen/></Button>
               <Button variant={"destructive"} size={"icon"}><Trash/></Button>

          </div></TableCell>
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
  )
}

export default Todos
