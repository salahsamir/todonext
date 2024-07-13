

import AddTodo from "@/components/AddTodo";
import Todos from "./todos";




export default  function Home() {
 

  return (
    <main className="container">
     
    <AddTodo/>
    <Todos/>

    </main>
  );
}
