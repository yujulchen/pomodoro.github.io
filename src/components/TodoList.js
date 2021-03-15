import { usestate, useeffect } from "react";
import Plus from "./svg/Plus";

function TodoList() {
  return (
    <>
      <div className="addNewTodo">
        <input type="text" name="add" id="add" placeholder="add todo" />
        <div type="submit" className="plus">
          <div className="plusIn">
            <Plus />
          </div>
        </div>
      </div>
      <div className="list">
        <ul>
          <li>Todo1</li>
          <li>Todo2</li>
          <li>Todo3</li>
          <li>Todo4</li>
          <li>Todo5</li>
        </ul>
      </div>
    </>
  );
}

export default TodoList;
