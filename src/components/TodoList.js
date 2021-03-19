import { useState, useEffect } from "react";
import Swal from "sweetalert2";

// svg components
import Plus from "./svg/Plus";
import Edit from "./svg/Edit";
import Delete from "./svg/Delete";

// components
import TodoEdit from "./TodoEdit";
import TodoAdd from "./TodoAdd";

function TodoList(props) {
  const [todo, setTodo] = useState("");

  // 每個事件的物件值
  // {id:number, text:string, completed:bool}
  const [todoLists, setTodoLists] = useState([
    { id: 3, text: "Todo3", completed: true, edited: false },
    { id: 2, text: "Todo2", completed: false, edited: false },
    { id: 1, text: "Todo1", completed: false, edited: true },
  ]);

  // 新增
  const handleAddNew = (text) => {
    // 增加新的待辦事項
    const newTodoItem = {
      id: +new Date(),
      text: text,
      completed: false,
    };

    // 在待辦事項列表最前面加入新的待辦事項
    const newTodos = [newTodoItem, ...todoLists];

    // 更新為新的待辦事項清單
    setTodoLists(newTodos);

    // 清空輸入文字
    setTodo("");
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

    // 設定回原本的todoList
    setTodoLists(newTodo);
  };

  // 刪除
  const handleDelete = (id) => {
    // 跳出彈窗確認是否要刪除
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "alertBtnYes",
        cancelButton: "alertBtnNo",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "您確定要刪除嗎？",
        text: "刪除後無法回復",
        imageUrl: "https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif",
        imageWidth: 350,
        imageHeight: 200,
        showCancelButton: true,
        confirmButtonText: "刪掉吧",
        cancelButtonText: "先不要",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            imageUrl:
              "https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif",
            imageWidth: 350,
            imageHeight: 220,
            confirmButtonText: "OK",
          });
          // 用filter挑出不是所選的id的其他物件(即刪除掉所選的id的意思)
          const newTodo = todoLists.filter((item) => item.id !== id);
          // 設定成新的待辦事項清單
          setTodoLists(newTodo);
        }
      });
  };

  // 切換成修改
  const handleEdit = (id) => {
    // 先拷貝一個新的陣列
    const newTodo = [...todoLists];

    // 利用id值找對應的todo item的索引值
    const index = newTodo.findIndex((item) => item.id === id);

    // 如果有找到就不會是-1
    if (index !== -1) {
      // 切換布林值
      newTodo[index].edited = !newTodo[index].edited;
    }

    // 設定回原本的todoList
    setTodoLists(newTodo);
  };

  // 儲存修改
  const handleEditSave = (id, text) => {
    // 先拷貝一個新的陣列
    const newTodo = [...todoLists];

    // 利用id值找對應的todo item的索引值
    const index = newTodo.findIndex((item) => item.id === id);

    // 如果有找到就不會是-1
    if (index !== -1) {
      newTodo[index].text = text;

      // 設定回原本的todoList
      setTodoLists(newTodo);

      // 切換回list
      handleEdit(id);
    }
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
            // 判斷是否按下Enter鍵，並且非是空白未填的情況(用trim去掉頭尾空白)
            if (e.key === "Enter" && e.target.value.trim()) {
              handleAddNew(todo);
            }
          }}
        />
        <div
          type="submit"
          className="plus"
          onClick={() => {
            // 用trim去掉頭尾空白
            if (todo.trim()) {
              handleAddNew(todo);
            }
          }}
        >
          <div className="plusIn">
            <Plus />
          </div>
        </div>
      </div>
      <div className="list">
        <ul>
          {/* 將陣列map出來，並加上key值 */}
          {todoLists.map((item, index) => {
            if (item.edited) {
              return (
                <div className="listBox">
                  <TodoEdit
                    item={item}
                    handleEdit={handleEdit}
                    handleEditSave={handleEditSave}
                  />
                </div>
              );
            }
            /* 用completed判斷是否要加刪除線 */
            return (
              <div className="listBox">
                <TodoAdd item={item} handleCompleted={handleCompleted} />
                <div className="liIconBox">
                  {/* 修改 */}
                  <div
                    className="edit"
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                    style={{ display: item.completed ? "none" : "block" }}
                  >
                    <Edit />
                  </div>
                  {/* 刪除 */}
                  <div
                    className="delete"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
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
