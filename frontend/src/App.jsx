import { ShowTodo } from "./components/ShowTodo";
import { Todos } from "./components/Todos";
import { UserLogin } from "./components/UserLogin";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  // const fetchTodos = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3000/showtodos");
  //     const response = await res.json();
  //     setTodos(response);
  //   } catch (e) {
  //     console.error("Error fetching todos:", e);
  //   }
  // };
  try {
    fetch("http://localhost:3000/showtodos").then(async function (res) {
      const response = await res.json();
      setTodos(response);
    });
  } catch (e) {
    console.log(e);
  }
  return (
    <div>
      <UserLogin />
      <Todos />
      <ShowTodo todos={todos} />
    </div>
  );
}

export default App;
