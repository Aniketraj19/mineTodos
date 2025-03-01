export function ShowTodo({ todos }) {
  if (!todos) {
    return <p>no todo available</p>;
  }

  return (
    <div>
      <h1>{todos.title}</h1>
    </div>
  );
}
