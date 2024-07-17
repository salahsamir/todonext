
import {  findTodo } from "@/actions/todoAction"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import DeleteTodo from "../DeleteTodo"

import moment from 'moment';
import { Badge } from "./badge"
import UpdateTodo from "../UpdateTodo"
import Actions from "../Actions";
const Todos = async({userId}:{userId:string |null}) => {
  // i need sort in decending order
  let todos=(await findTodo(userId as string))

  const formatDate = (dateString:Date) => {
    return moment(dateString).format('h:mm:ss a'); // Example: July 13th 2024, 10:53:41 am
  };
  return (
    <Table className="w-full rounded-md p-2 my-3">
    
      <TableHeader >
        <TableRow >
          <TableHead className="">Title</TableHead>
          <TableHead>Body</TableHead>

          <TableHead>Completed</TableHead>
          <TableHead>Date</TableHead>

          <TableHead className="text-right" >
            Actions

          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id} className=" even:bg-muted">
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell>{todo.body?.slice(0, 50)}</TableCell>

            <TableCell className="mx-2">{todo.completed? <Badge><span className="text-green-500 p-2">Completed</span></Badge>:<Badge> <span className="text-red-500 line-through p-2">UnCompleted</span></Badge>}</TableCell>
            <TableCell>{formatDate(todo.created_at)}</TableCell>
            <TableCell className="m-auto"> <div className='flex items-center justify-end gap-3'>
               
            <Actions todo={todo}/>

          </div></TableCell>
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
  )
}

export default Todos
