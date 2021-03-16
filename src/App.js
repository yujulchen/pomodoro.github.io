import { useState, useEffect } from "react";

// css
import "./App.css";
import "./style/pomodoro.scss";

// components
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";

function App() {
  return (
    <>
      <div className="bg">
        <div className="innerBox">
          <div className="title">
            <p>POMODORO</p>
          </div>
          <div className="todoList">
            <TodoList />
          </div>
        </div>
        <div className="clock">
          <Clock />
        </div>
      </div>
    </>
  );
}

export default App;
