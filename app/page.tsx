

import AddTodo from "@/components/AddTodo";
import Todos from "../components/ui/todosTable";
import { auth } from "@clerk/nextjs/server";




export default  function Home() {
  const {userId}=auth()

  return (
    <main className="container">
     
    <AddTodo userId={userId}/>
    <Todos userId={userId}/>

    </main>
  );
}
