

import AddTodo from "@/components/AddTodo";
import Todos from "../components/ui/todosTable";




export default  function Home() {
 

  return (
    <main className="container">
     
    <AddTodo/>
    <Todos/>

    </main>
  );
}
