import { useState } from "react";
export function Todos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div style={{ padding: 10, margin: 10 }}>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({ todo: title, description: description }),
            headers: { "Content-type": "application/json" },
          }).then(async function (res) {
            const json = await res.json();
            alert(json.msg);
          });
        }}
      >
        Create todo
      </button>
      <br />
    </div>
  );
}
