export function ShowTodo({ todos }) {
  // console.log(todos);
  if (!todos) {
    return <p>no todo available</p>;
  }
  return todos.map(function (todo) {
    console.log(todo.description);
    return (
      <div>
        <h1>{todo.todo}</h1>
        <h2>{todo.description}</h2>
      </div>
    );
  });
}
