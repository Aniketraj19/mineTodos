import { useState } from "react";

export function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={{ padding: 10, margin: 10 }}>
      <input
        onChange={function (e) {
          const value = e.target.value;
          setEmail(e.target.value);
          console.log(email);
        }}
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Email"
      />
      <br />
      <input
        onChange={function (e) {
          const value = e.target.value;
          setPassword(e.target.value);
          console.log(password);
        }}
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Password"
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/signin", {
            method: "POST",
            body: JSON.stringify({ username: email, password: password }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert(json.token);
          });
        }}
        style={{ padding: 10, margin: 10 }}
      >
        SignUp
      </button>
    </div>
  );
}
