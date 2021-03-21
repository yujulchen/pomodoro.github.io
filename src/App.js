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
      {/* 桌機版 */}
      <div className="desk">
        <div className="bg">
          <div className="innerBox ">
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
      </div>
      {/* 手機版 */}
      <div className="mobile">
        <div className="bg">
          <div className="innerBox">
            <div className="title">
              <p>POMODORO</p>
            </div>
            <div className="clock-m">
              <Clock />
            </div>
          </div>
          <div className="todoList">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
