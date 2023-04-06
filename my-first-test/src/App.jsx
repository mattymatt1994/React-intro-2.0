import { Component } from "react";
import "./App.css";
import FilmsList from "./components/filmsList.jsx";
import { useState } from "react";
function App(props) {
  const [list, setList] = useState(["ready","set","GO"])
  const [text, setText] = useState("")
  function onSubmit(event) {
    event.preventDefault();
    let newList = [...list,text];
    setList(  newList );
  }
  
    return (
      <div>
        <h1>Hello World!</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(event) => setText(event.target.value )}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }


export default App;
