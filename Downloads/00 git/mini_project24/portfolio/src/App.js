import React, { useState } from "react";
// import Greeting from "./components/Greeting";
import MyForm from "./components/MyForm";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <h1>{username}님, 환영합니다.</h1>
      <MyForm
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default App;

// ---------------
