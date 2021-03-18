import { useState, useEffect } from "react";
import Plus from "./svg/Plus";
import Edit from "./svg/Edit";
import Delete from "./svg/Delete";

function TodoList() {
  const [todo, setTodo] = useState("");

  // 每個事件的物件值
  // {id:number, text:string, completed:bool}
  const [todoLists, setTodoLists] = useState([
    { id: 2, text: "Todo2", completed: false },
    { id: 1, text: "Todo1", completed: true },
  ]);

  // 新增
  const handleAddNew = (e) => {
    // 判斷是否按下Enter鍵，並且非是空白未填的情況(用trim去掉頭尾空白)
    if (e.key === "Enter" && e.target.value.trim()) {
      // 增加新的待辦事項
      const newTodoItem = {
        id: +new Date(),
        text: e.target.value,
        completed: false,
      };

      // 在待辦事項列表最前面加入新的待辦事項
      const newTodos = [newTodoItem, ...todoLists];

      // 更新為新的待辦事項清單
      setTodoLists(newTodos);

      // 清空輸入文字
      setTodo("");
    }
  };

  // 切換是否已完成
  const handleCompleted = (id) => {
    // 先拷貝一個新的陣列
    const newTodo = [...todoLists];

    // 利用id值找對應的todo item的索引值
    const index = newTodo.findIndex((item) => item.id === id);

    // 如果有找到就不會是-1
    if (index !== -1) {
      // 切換布林值
      newTodo[index].completed = !newTodo[index].completed;
    }

    // 設定回原本的todo
    setTodoLists(newTodo);

    // 清空輸入文字
    setTodo("");
  };

  return (
    <>
      <div className="addNewTodo">
        <label htmlFor="add"></label>
        <input
          type="text"
          id="add"
          placeholder="add todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onKeyPress={(e) => {
            handleAddNew(e);
          }}
        />
        <div type="submit" className="plus">
          <div className="plusIn">
            <Plus />
          </div>
        </div>
      </div>
      <div className="list">
        <ul>
          {/* 將陣列map出來，並加上key值 */}
          {todoLists.map((item, index) => {
            /* 用completed判斷是否要加刪除線 */
            return (
              <div className="listBox">
                <label htmlFor={item.id}>
                  <li key={item.id}>
                    <input
                      id={item.id}
                      type="checkbox"
                      className="check"
                      checked={item.completed}
                      onChange={() => {
                        handleCompleted(item.id);
                      }}
                    />
                    {item.completed ? <del>{item.text}</del> : item.text}
                  </li>
                </label>
                <div className="liIconBox">
                  <div className="edit">
                    <Edit />
                  </div>
                  <div className="delete">
                    <Delete />
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
