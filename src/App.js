import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import "./App.css";
import Todo from "./components/Todo/Todo.js";
import db from "./firebase";
import firebase from "firebase";

const App = () => {
  const [todo, setTodo] = useState(["deep"]);
  const [input, setInput] = useState("");

  console.log(todo);

  const handleAdd = (event) => {
    event.preventDefault();

    db.collection("deeptodo").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  useEffect(() => {
    db.collection("deeptodo")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  return (
    <div className="full-color">
      <div className="todo-container">
        <h2 className="font-heading">
          Todo App <span>🚩</span>
        </h2>
        <form>
          <TextField
            id="standard-basic"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            label="✍ Add a Task"
          />
          <Button
            type="submit"
            onClick={handleAdd}
            disabled={!input}
            variant="contained"
            color="secondary"
          >
            Add
          </Button>
        </form>
      </div>
      <div className="todo-listall">
        {todo.map((td) => (
          <Todo todo={td}> </Todo>
        ))}
      </div>
    </div>
  );
};

export default App;
